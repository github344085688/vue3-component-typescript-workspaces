/**
 * Created by f on 2022/11/2.
 */

import { DefaultSelect } from '@project/share';
import { DefaultSelectTriangle }  from "@project/share";
import StatusColors from "./status-colors";
import StatusBgColors from "./status-bg-colors";
import PrimaryModal from "./primary-modal";
import Pager from "./pager";
const globalComponents = [
    {
        name:'default-select',
        component:DefaultSelect
    }, {
        name:'default-select-triangle',
        component:DefaultSelectTriangle
    }, {
        name:'status-colors',
        component:StatusColors
    }, {
        name:'status-bg-colors',
        component:StatusBgColors
    }, {
        name:'primary-modal',
        component:PrimaryModal
    }, {
        name:'pager',
        component:Pager
    },
];

export default {
    install (app: any) {
        globalComponents.forEach(component => {
            app.component(component.name, component.component);
        });
    }
}
export { default as ImportDrap } from './import-drap';
export { default as BaseDatePicker } from './base-date-picker';
