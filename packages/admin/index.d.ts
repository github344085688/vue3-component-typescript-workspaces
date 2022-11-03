/* eslint-disable */
declare module '*.vue' {
    import type {DefineComponent} from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare const API_CONTEXT_PATH: string;
declare module 'vue-datepicker-next' {
    const datepicker: any;
    export default datepicker;
}
declare module 'moment' {
    const moment: any;
    export default moment;
}
