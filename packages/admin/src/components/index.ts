/**
 * Created by f on 2022/11/2.
 */

import DefaultSelect from '@project/share/components/default-select';
import DefaultSelectTriangle from "@project/share/components/default-select-triangle";
import StatusColors from "./status-colors";
import StatusBgColors from "./status-bg-colors";
import PrimaryModal from "./primary-modal";
import Pager from "./pager";
const globalComponents = [
    DefaultSelect,
    DefaultSelectTriangle,
    StatusColors,
    StatusBgColors,
    PrimaryModal,
    Pager
];

export default {
    install (app: any) {
        globalComponents.forEach(component => {
            app.component(component.name, component);
        });
    }
}
export { default as ImportDrap } from './import-drap';
export { default as BaseDatePicker } from './base-date-picker';
