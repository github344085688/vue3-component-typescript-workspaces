/**
 * Created by f on 2022/9/28.
 */
import Invoices from '../layouts/invoices'
import Dashboard from '../layouts/dashboard'
import InvoicesList from '../layouts/invoices/invoices-list'
import ImportExport from '../layouts/invoices/import-export'
import Service from '../layouts/service'
import Export from '../layouts/invoices/export'
import InvoiceHistory from '../layouts/invoice-history'
declare interface SideNavList {
    groupName: string;
    children?: Array<SideNavChildren>;
}
declare interface SideNavChildren {
    title: string;
    icon: any;
    path?: string,
    name?: string,
    component?: any;
    children?: Array<any>;
}
const SideNavConfig: Array<SideNavList> = [
    {
        groupName: '',
        children: [{
            title: 'Dashboard',
            name: 'Dashboard',
            icon: 'dashboard.svg',
            path: '/dashboard',
            component: Dashboard,
            children: [],

        },]
    },
    {
        groupName: 'MAIN MENU',
        children: [
            {
                title: 'TMS',
                name: 'TMS',
                icon: 'tms.svg',
                children: [{
                    parentName: 'TMS',
                    path: 'TMS/invoices',
                    name: 'Invoices',
                    component: Invoices,
                    title: 'Invoices',
                    redirect: {name: 'InvoicesList'},
                    children: [{
                        path: 'invoices-list',
                        name: 'InvoicesList',
                        component: InvoicesList,
                    }, {
                        path: 'import-export',
                        name: 'ImportExport',
                        component: ImportExport,
                    }, {
                        path: 'export',
                        name: 'Export',
                        component: Export,
                    },]
                }, {
                    parentName: 'TMS',
                    path: 'TMS/invoice-history',
                    name: 'InvoiceHistory',
                    component: InvoiceHistory,
                    title: 'Invoice History'
                }],
            },
            {
                title: 'Service',
                name: 'Service',
                path: 'service',
                component: Service,
                icon: 'service.svg',

            },
            {
                title: 'Brokerage',
                name: 'Brokerage',
                path: 'Brokerage',
                component: Service,
                icon: 'brokerage.svg',

            }
        ]
    },
    {
        groupName: 'MY BUSINESS', children: [
        {
            title: 'Payments ',
            name: 'Payments',
            icon: 'payments.svg',
            children: [{
                parentName: 'Payments',
                path: 'payments/business',
                name: 'Business',
                component: Invoices,
                title: 'Business'
            }, {
                parentName: 'Payments',
                path: 'payments/invoice-history',
                name: 'businessHistory',
                component: InvoiceHistory,
                title: 'Business History'
            }],
        }, {
            title: 'Business Info  ',
            name: 'BusinessInfo',
            icon: 'your-business.svg',
        },
    ]
    },
    {
        groupName: 'GENERAL', children: [
        {
            title: 'Message Center ',
            name: 'MessageCenter',
            icon: 'message-center.svg',
        }, {
            title: 'Settings',
            name: 'Settings',
            icon: 'settings.svg',
        },
    ]
    },

];

export default SideNavConfig;