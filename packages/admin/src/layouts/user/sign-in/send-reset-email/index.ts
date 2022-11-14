import { Options } from 'vue-class-component';
import template from "./send-reset-email.vue";
import BaseVue from '@project/share/utils/base-vue';
import { LoginServers } from "../../../../services";
import { Field, Form, useField } from 'vee-validate';
@Options({
    mixins: [template],
    name: 'SendResetEmail',
    components: {
        Field,
        Form,
        useField
    }

})
export default class SendResetEmail extends BaseVue {
    public isLoding:boolean = false;
    public sigInBoxHeight:number = 380;
    public  returnToLogin():void{
        this.setRouter({ name: 'ChangeUserSignIn'})
    }

    public getBoxHeight() {
        this.$emit('update:modelValue', this.sigInBoxHeight);
    }
}
