import { Options, Vue } from 'vue-class-component';
import template from "./chart-line.vue";
import { chartLine, salesChartLine, usersLine, defaultChartLine } from '../../utils/chartOptions';
import { PropType } from 'vue'
import { Line } from 'vue-chartjs'
import {forEach,isArray,isPlainObject} from 'lodash-es';
declare interface CartConfig {
    type?: string,
    label?: string,
    data?: Array<number>,
    borderColor?: string,
    backgroundColor?: string,
    spot?: string,
};
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Plugin
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
);

@Options({
    mixins: [template],
    name:'Service',
    components: {
        Line
    },
    props: {
        chartId: {
            type: String,
            default: 'bar'
        },
        width: {
            type: Number,
            width: 400
        },
        height: {
            type: Number,
            default: 250
        },
        cssClasses: {
            default: '',
            type: String
        },
        plugins: {
            type: Array as PropType<Plugin<'line'>[]>,
            default: () => []
        },
        datasets: {
            type: Array,
            default: () => [],
        },
        chartLabels: {
            type: Array,
            default: () => [],
        },
        optionsName: {
            type: String,
            default: 'chartLine',
        },
        cartOptions: {
            type: [Object,Array, String],
            default: '',
        }
    },
    watch:{
        datasets:{handler : 'watchDatasets', immediate: true ,deep: true},
        chartLabels:{handler:'watchChartLabels', immediate: true ,deep: true}
    }
})
export default class ChartLine extends Vue {
    public chartId!:string;
    public cssClasses!:string;
    public optionsName!:string;
    public cartOptions!:object | Array<any> | string;
    public width!: number;
    public height!: number;
    public styles!:Object;
    public plugins!: any;
    public datasets!: Array<any>;
    public chartLabels!: Array<string>;

    public chartData: any = {
        datasets:[],
    }

    private alternatePointStyles(ctx: any) {
        const index:any = ctx.dataIndex;
        // console.log(index);
        console.log('reality', !ctx.dataset.data[index+1] );
        if(index == 1) return 'circle';
        else if(!ctx.dataset.data[index+1]) return 'circle';
        else return 'none';
    }
    public  chartOptions: any =  chartLine;
    public watchDatasets<T>(value:Array<number>): void {
        this.fillCartData(value);

    }

    public watchChartLabels<T>(value: T ): void {
        this.chartData.labels =  value;
    }

    private fillCartData(datas:Array<number>, isMounted:boolean = false){
        if(isMounted) this.chartData.datasets = [];
        forEach(datas, (val: any, index: any) => {
            if(isMounted){
                this.fillNewCartData(val, index);
            }else {
                if(this.chartData.datasets[index]&&this.chartData.datasets[index].data) this.chartData.datasets[index].data = val;
                else  this.fillNewCartData(val, 0);
            }


        });
    }

    private fillNewCartData<T>(data: Array<number>, index: number): void{
        let cart: CartConfig = {
            type: 'line',
            data: data};
        if(this.cartOptions){
            let indexCartOptions:any = {};
            if (isArray(this.cartOptions)) {
                indexCartOptions = this.cartOptions[index];
            }
            if (isArray(this.cartOptions)) {
                indexCartOptions = this.cartOptions[index];
            }
            if (isPlainObject(this.cartOptions)) {
                indexCartOptions = this.cartOptions;
            }
            cart.type = indexCartOptions.type ? indexCartOptions.type : 'line';
            cart.label = indexCartOptions.label ? indexCartOptions.label : '';
            cart.borderColor = indexCartOptions.borderColor ? indexCartOptions.borderColor : '#488492';
            cart.backgroundColor = indexCartOptions.backgroundColor ? indexCartOptions.backgroundColor : '#488492';
            cart.spot = indexCartOptions.spot ? indexCartOptions.spot : '';
        };
        this.chartData.datasets.push(cart);
    }

    public mounted():void{
        this.fillCartData(this.datasets, true);
        this.chartData.labels =  this.chartLabels;
        switch(this.optionsName) {
            case 'chartLine':
                this.chartOptions = chartLine;
                break;
            case 'salesChartLine':
                this.chartOptions = salesChartLine;
                break;
            case 'usersLine':
                this.chartOptions = usersLine;
                break;
            case 'defaultChartLine':
                this.chartOptions = defaultChartLine;
                break;
            default:
                this.chartOptions = chartLine;
        }

    }

}