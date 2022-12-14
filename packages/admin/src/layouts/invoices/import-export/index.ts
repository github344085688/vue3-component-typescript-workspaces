import { Options } from 'vue-class-component';
import template from "./import-export.vue";
import {BaseVue} from '@project/share';
import { ImportDrap } from '../../../components';
import { useEventbus } from '@project/share';
import './import-export.scss';
@Options({
    mixins: [template],
    name: 'ImportExport',
    components: {
        ImportDrap
    },
    props: {
        propMessage: String
    },
})
export default class ImportExport extends BaseVue {
    public isShowMoudal:boolean = false;
    public searchParams:any = {};
    public eventbus = useEventbus();
    public emitter:any ;
    public paging: any = {
        pageSize: 10,
        currentPage: 1,
        totalSize: 2000,
        text: 'tasks'
    };
    public mounted( ):void{
    }

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


    public onExport(paging: any){
        this.eventbus.customEmit('foo',{a:'1454'});
        // this.setRouter({name:'Export'})
    }


}
