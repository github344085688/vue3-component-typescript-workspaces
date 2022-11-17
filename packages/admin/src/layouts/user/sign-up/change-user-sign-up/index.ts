import { Options } from 'vue-class-component';
import template from "./change-user-sign-up.vue";
import {BaseVue} from '@project/share';
import { LoginServers } from "../../../../services";
import { ref } from "vue";
@Options({
    mixins: [template],
    name:'ChangeUserSignUp',
    components: {
    },

})
export default class ChangeUserSignUp extends BaseVue {
    sigInBoxHeight:number = 440;
    public onChangeUser(name: string):void{
        this.setRouter({ name: 'ExistingCustomerSignUp'})
       /* this.showPageName = 'loginPage';*/
    }



    // 生命周期
    mounted(){
        const pathname = window.location.pathname.slice(1);
    }

    beforeUnmount(){

    }

    public getBoxHeight() {
        this.$emit('update:modelValue', this.sigInBoxHeight);
    }

}
