import { Options } from 'vue-class-component';
import template from "./user-routers-views.vue";
import BaseVue from '../../utils/base-vue';
import RouterViews from '../router-views';
@Options({
    mixins: [template],
    name: 'UserRoutersViews',
    components: {
        RouterViews
    }
})
export default class UserRoutersViews extends BaseVue {
    public isShowPageName: boolean =false;

    public mounted():void{
        this.isShowPageName = true;
    }
}
