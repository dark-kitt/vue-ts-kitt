import { ButtonHTMLAttributes } from '../../../vue/dist/vue.esm-bundler.js';

export interface Props {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    text: string;
    HTMLAttributes?: ButtonHTMLAttributes;
}
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    primary: boolean;
    size: string;
    text: string;
    HTMLAttributes: () => {
        name: string;
        type: "button" | "submit" | "reset" | undefined;
        disabled: boolean;
    };
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    primary: boolean;
    size: string;
    text: string;
    HTMLAttributes: () => {
        name: string;
        type: "button" | "submit" | "reset" | undefined;
        disabled: boolean;
    };
}>>>, {
    primary: boolean;
    size: "small" | "medium" | "large";
    text: string;
    HTMLAttributes: ButtonHTMLAttributes;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
