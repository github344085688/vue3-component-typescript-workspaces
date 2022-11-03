import { Options } from 'vue-class-component';
import template from "./export.vue";
import BaseVue from '@project/share/utils/base-vue';
import { ImportDrap } from '../../../components';
@Options({
    mixins: [template],
    name: 'Export',
    components: {
        ImportDrap
    },
    props: {
        propMessage: String
    },
})
export default class Export extends BaseVue {
    public isShowMoudal:boolean = false;
    public searchParams:any = {};
    public paging: any = {
        pageSize: 10,
        currentPage: 1,
        totalSize: 2000,
        text: 'tasks'
    };
    public onShowMoudal(isShowMoudal:boolean){
        this.isShowMoudal=true;
    }

    public routerImportExport():void {
        this.setRouter({name:'ImportExport'})
    }

    public routerInvoices():void {
        this.setRouter({name:'Invoices'})
    }


    public getList(paging: any){
        console.log(paging);
    }


}
