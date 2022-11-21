import { Options } from 'vue-class-component';
import template from "./dashboard.vue";
import './dashboard.scss';
import {BaseVue} from '@project/share';
import ChartLine from '../../components/chart-line';
import MixedChart  from '../../components/mixed-chart';
import PieChart  from '../../components/pie-chart';
import { BaseDatePicker }  from '../../components';
@Options({
    mixins: [template],
    name: 'Dashboard',
    components: {
        ChartLine,
        MixedChart,
        BaseDatePicker,
        PieChart
    },
    props: {
        propMessage: String
    },
})
export default class Dashboard extends BaseVue {
    public cartData: Array<any> = [
        [2, 10, 25, 30]
    ];
    public cartOptions: Array<any> = [
        {
            type: 'line',
            label: 'circle',
            borderColor: '#488492',
            backgroundColor: '#488492',
            spot:'last',
        },
    ];
    public chartLabels: Array<any> =  ["", "", "","" ];
    public isCartData:boolean =true;
    public service:any = {
        business:'Gross Volume',
        month:'December 1,2022 ~ November 1,2022'
    };
    private setData(): void{
        this.isCartData =!this.isCartData;
        this.cartData =  [
            [10, 20,15, 35, 110, 130, 135, 140],
            [2, 10, 25, 30, 50, 60, 65, 75],
            [10, 20,20, 25, 95, 100, 110, 115],
        ];
    }
    public orderChartData: any = {
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
    public availablechartData: any = {
        labels: ["","","","","","","","" ],
        datasets: [
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

    public onSelectChartDate(date: string): void {
        this.setData();
    }
    public Success() {
        this.$success('sss')

    }

    public Error() {
        this.$errors('sss')
    }

    public Warning() {
        this.$warnings('ssss')
    }

    public Normal() {
        this.$normals('ssss')
    }

    public Self() {
        this.$self('ssss')
    }

    public Reconfirm() {
        this.$reconfirm({
            title: 'Remove Small Parcel',
            content: 'Are You Sure You Want To remove this small parcel? ',
            confirm: 'Yes',
            cancel: 'No',
        })
            .then((ord: any) => {
                console.log(ord);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }


}
