import { Options, Vue } from 'vue-class-component';
import template from "./pie-chart.vue";
import {PropType } from 'vue'
import { pieChart } from '../../utils/chartOptions';
import { Pie } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)


@Options({
    mixins: [template],
    name:'Service',
    components: {
        Pie
    },
    props: {
        chartId: {
            type: String,
            default: 'bar'
        },
        width: {
            type: String ,
            default: '100%'
        },
        height: {
            type: String ,
            default: '250'
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            default: () => {}
        },
        plugins: {
            type: Array as PropType<Plugin<'line'>[]>,
            default: () => []
        },
        datasets: {
            type: Object,
            default: () => {},
        }
    },
    watch:{
        datasets:{handler : 'watchDatasets', immediate: true ,deep: true}
    }
})
export default class PieChart extends Vue {

    public chartId!:string;
    public cssClasses!:string;
    public width!: string;
    public height!: string;
    public styles!:Object;
    public plugins!: any;

    public datasets!:Array<any>;
    public chartOptions: any = pieChart;
    public isSideSpread: boolean = true;
    public sideSpread: any = {};
    public chartData:any = {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
            {
                backgroundColor: ['#E5F5FD', '#EBECFF', '#FFEFCD', '#D6FCE7'],
                data: [40, 20, 80, 10]
            }
        ]
    };
    public watchDatasets(value: number, oldValue: number): void {
       // this.chartData = value;
    }

    public mounted():void{
       /* this.chartData.datasets[0].data = this.datasets.length>0 ? this.datasets:[35, 20, 35, 50, 45, 50, 75, 55 ];*/
    }


}