import { Options } from 'vue-class-component';
import template from "./verify-email-tips.vue";
import BaseVue from '@project/share/utils/base-vue';
import { LoginServers } from "../../../../services";
@Options({
    mixins: [template],
    name:'VerifyEmailTips',
})
export default class VerifyEmailTips extends BaseVue {


    public onSubmit(values:any) {
        console.log(values); 
    }
    public resendEmail() {
        this.setRouter({ name: 'VerifyEmail'})
    }
    public mounted(){

    }

    public beforeUnmount(){
    }

 
}
