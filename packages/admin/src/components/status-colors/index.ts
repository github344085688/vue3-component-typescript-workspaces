import { Options, Vue } from 'vue-class-component';
import template from "./status-colors.vue";
@Options({
    mixins: [template],
    name:'StatusColors',
    props: {
        bg: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        fill: {
            type: Boolean,
            default: true,
        }
    },
})
export default class StatusColors extends Vue {
    public bg!: string;
    public color!: string;
    public fill!: boolean;
}
