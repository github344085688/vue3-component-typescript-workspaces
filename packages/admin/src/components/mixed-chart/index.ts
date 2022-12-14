import { Options, Vue } from 'vue-class-component';
import template from "./mixed-chart.vue";
import {PropType } from 'vue'
import { chartminxed } from '../../utils/chartOptions';
import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Plugin,
    BarElement

} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    BarElement
)


@Options({
    mixins: [template],
    name:'Service',
    components: {
        Bar
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
export default class MixedChart extends Vue {

    public chartId!:string;
    public cssClasses!:string;
    public width!: string;
    public height!: string;
    public styles!:Object;
    public plugins!: any;

    public datasets!:Array<any>;
    public chartOptions: any = chartminxed;
    public isSideSpread: boolean = true;
    public sideSpread: any = {};
    public chartData: any = {
        labels: ["","","","","","","","" ],
        datasets: [
            {
                type: 'line',
                label: 'circle',
                data: [35, 20, 35, 50, 45, 50, 65, 55 ],
                /*data: [{
                    x: -10,
                    y: 0
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }, {
                    x: 0.5,
                    y: 5.5
                }, null, null, null, null],*/
                borderColor: '#488492',
                backgroundColor: '#488492',
                /* pointStyle: 'triangle',
                 pointRadius: 6,*/
            },
            {
                type: 'bar',
                label: 'aim',
                data: [2, 10, 25, 30,50, 60, 65, 75],
                borderColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                pointStyle: 'none',
                pointRadius: 0,
            },

        ]
    }
    public watchDatasets(value: number, oldValue: number): void {
       this.chartData = value;
    }

    public mounted():void{
       /* this.chartData.datasets[0].data = this.datasets.length>0 ? this.datasets:[35, 20, 35, 50, 45, 50, 75, 55 ];*/
    }


}