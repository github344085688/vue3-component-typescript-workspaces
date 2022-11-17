import { Options } from 'vue-class-component';
import template from "./change-user-sign-in.vue";
import {BaseVue} from '@project/share';
@Options({
    mixins: [template],
    name: 'ChangeUser',
    components: {
    },

})
export default class ChangeUser extends BaseVue {
    sigInBoxHeight:number = 450;
    public showPageName:string = 'login';
    public checkPageName(name:string ): void {
        this.showPageName = name;
    }

    public countChanged(value: number, oldValue: number): void {
        // this.$log(`countChanged`, { value, oldValue });
    }


    public changePage(name: string):void{
        this.showPageName = name;
    }

    public onChangeUser(name: string):void{
        this.setRouter({ name: 'Login'})
    }



    // 生命周期
    mounted(){
        const pathname = window.location.pathname.slice(1);
        this.$emit('update:modelValue', this.sigInBoxHeight);
    }

    beforeUnmount(){

    }

    public getBoxHeight() {
        this.$emit('update:modelValue', this.sigInBoxHeight);
    }
}
