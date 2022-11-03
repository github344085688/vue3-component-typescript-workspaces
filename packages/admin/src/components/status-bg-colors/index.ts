import { Options, Vue } from 'vue-class-component';
import template from "./status-bg-colors.vue";
@Options({
    mixins: [template],
    name:'StatusBgColors',
    props: {
        status: {
            type: String,
            default: '',
        },
        form: {
            type: String,
            default: '',
        },
    },
})
export default class StatusBgColors extends Vue {
    public status!: string;
    public form!: string;

}
