import { Options } from 'vue-class-component';
import template from "./invoices-list.vue";
import {BaseVue} from '@project/share';
@Options({
    mixins: [template],
    name: 'InvoicesList',
    components: {
    },
    props: {
        propMessage: String
    },
})
export default class InvoicesList extends BaseVue {
    public isShowMoudal:boolean = false;
    public searchParams:any = {};
    public paging: any = {
        pageSize: 10,
        currentPage: 1,
        totalSize: 2000,
        text: 'tasks'
    };
    public onShowMoudal(isShowMoudal:boolean):void{
        this.isShowMoudal=true;
    }

    public routerImportExport():void {
        this.setRouter({name:'ImportExport'})
    }

    public routerInvoices():void {
        this.setRouter({name:'Invoices'})
    }

    public getList(paging: any):void{
        console.log(paging);
    }


}
