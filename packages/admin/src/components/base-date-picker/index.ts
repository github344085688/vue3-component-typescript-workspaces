import { Options, Vue } from 'vue-class-component';
import template from "./base-date-picker.vue";
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import moment from "moment";
@Options({
    mixins: [template],
    name:'BaseDatePicker',
    components: {
        DatePicker
    },
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
})
export default class BaseDatePicker extends Vue {
    public modelValue!: string;
    public value1: any= null;
    public value2: any= null;
    public time3: any= null;
    public mounted():void{
        this.datePickerData = this.modelValue;

    }
    public open:boolean = false;
    inputProps= {
        clearable: false,
        editable: false,
        placeholder: 'test placeholder',
        inputAttr: {
            name: 'test',
            id: 'test',
        },
    };
    shortcuts= [
        {
            text: 'range',
          /*  onClick() {
            return [new Date(), new Date()];
        }*/
        }
    ];
    value= new Date();
    append= false;
    rangeValue= [new Date(2019, 9, 4, 8, 30, 0), new Date(2019, 9, 4, 18, 30, 0)];


    public datePickerData:string = '';

    public handleChange(val:any):void{
        let time = moment(val[0]).format("MMMM DD YYYY");
        let time2 = moment(val[1]).format("MMMM DD YYYY");
        this.datePickerData = `${time} ~ ${time2}`;
        this.$emit('update:modelValue', `${time} ~ ${time2}`);
        this.$emit('emitChoose', `${time} ~ ${time2}`);
        this.open = false;
    }

    public handleFocus():void{
        this.open = true;
    }
}