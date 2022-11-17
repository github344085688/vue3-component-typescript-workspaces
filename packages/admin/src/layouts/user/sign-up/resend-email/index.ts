import { Options } from 'vue-class-component';
import template from "./resend-email.vue";
import {BaseVue} from '@project/share';
import { LoginServers } from "../../../../services";
@Options({
    mixins: [template],
    name:'ResendEmail',
})
export default class ResendEmail extends BaseVue {


    public sigInBoxHeight:number = 700;
    public onSubmit(values:any) {
        console.log(values); 
    }
    public onInvalidSubmit(msg:any) {
    }
    public mounted(){

    }

    public beforeUnmount(){
    }
    public verifyEmailAddress(): void {
        this.setRouter({ name: 'VerifyEmailTips'})
    }
    public getBoxHeight() {
        this.$emit('update:modelValue', this.sigInBoxHeight);
    }
 
}
