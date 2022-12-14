import { createApp } from "vue";
import PopupHead from "./popup-head";
import PopupReconfirm from "./popup-reconfirm";

let counts = 10;
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: any,
        $error: any
    }
}

export const plugins = {
    install (app: any) {
        const MESSage_EXTEND = createApp(PopupHead);
        const MESSage_CREATE_EL: any = MESSage_EXTEND.mount(
            document.createElement("div"),
        );
        document.body.appendChild(MESSage_CREATE_EL.$el);
        const PUBLIC_FN = {

            hexToRgb (hex: any, opacity: any = 1) {
                return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
                    + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ') ';
            },

            success (content: any) {
                const UID = String(counts)
                let config:any = {}
                config.uid = UID;
                config.color = "#67C23A";
                config.background = this.hexToRgb("#e1f3d8");
                config.borderColor = "#67C23A";
                config.content = content;
                config.moudel = 'success';
                this.show(config, MESSage_CREATE_EL, true)
            },

            error (content: any) {
                let config:any = {}
                const UID = String(counts)
                config.uid = UID;
                config.color = "#F56C6C";
                config.background = this.hexToRgb("#fde2e2");
                config.content = content;
                config.borderColor = "#F56C6C";
                config.moudel = 'error';
                this.show(config, MESSage_CREATE_EL, true);
            },

            warning (content: any) {
                let config:any = {}
                const UID = String(counts)
                config.uid = UID;
                config.color = "#E6A23C";
                config.background = this.hexToRgb("#ffdaa4");
                config.icon = "el-icon-warning";
                config.content = content;
                config.borderColor = "#E6A23C"

                this.show(config,MESSage_CREATE_EL, true)
            },

            normal (content: any) {
                let config:any = {}
                const UID = String(counts)
                config.uid = UID;
                config.color = "#303133";
                config.background = this.hexToRgb("#909399");
                config.content = content;
                config.borderColor = "#303133"

                this.show(config,MESSage_CREATE_EL, true)
            },

            self (content: any, color: any = "#303133", background : any= "#909399", icon : any= "el-icon-info", bgop: any = 1) {
                let config:any = {}
                config.show = true;
                config.color = color;
                config.background = this.hexToRgb(background, bgop);
                config.icon = icon;
                config.content = content;
                this.show(config,MESSage_CREATE_EL, true)
            },

            show (config: any , el:any, isClose: boolean = true) {
                const UID = String(counts);
                el.uid = UID;

                if (el.msgOueue.length > 5) {
                    el.msgOueue.shift()
                }

                counts++;
                el.msgOueue.push({uid: counts, config: config});
                if(isClose) setTimeout(() => {
                   el.onClose();
                }, 3000)
            },
        };

        const reconfirm = (options: any)=>{
            const POPUP_RECONFIRM = createApp(PopupReconfirm);
            const POPUP_RECONFIRM_EL: any = POPUP_RECONFIRM.mount(
                document.createElement("div"),
            );
            return new Promise((resolve, reject) => {
                options.show = true;
                document.body.appendChild(POPUP_RECONFIRM_EL.$el);
                POPUP_RECONFIRM_EL.options = options;
                let successBtn = POPUP_RECONFIRM_EL.onDetermine;
                let cancelBtn = POPUP_RECONFIRM_EL.onCancel;
                let closeBtn = POPUP_RECONFIRM_EL.onClose;
                POPUP_RECONFIRM_EL.onDetermine = () => {
                    successBtn();
                    resolve('Confirm');
                };
                POPUP_RECONFIRM_EL.onCancel = () => {
                    cancelBtn();
                    reject('Cancel');
                };
                POPUP_RECONFIRM_EL.onClose = () => {
                    closeBtn();
                    reject('Close');
                };
            });

        };
        app.config.globalProperties.$message = PUBLIC_FN;
        app.config.globalProperties.$reconfirm = reconfirm;
    }
}