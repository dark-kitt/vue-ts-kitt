import { DefineComponent, PropType, ButtonHTMLAttributes, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';
declare const _default: {
    Button: {
        Button: DefineComponent<{
            text: {
                type: PropType<string>;
                required: true;
                default: string;
            };
            HTMLAttributes: {
                type: PropType<ButtonHTMLAttributes>;
                default: () => {
                    name: string;
                    type: "button" | "submit" | "reset" | undefined;
                };
            };
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
            text: {
                type: PropType<string>;
                required: true;
                default: string;
            };
            HTMLAttributes: {
                type: PropType<ButtonHTMLAttributes>;
                default: () => {
                    name: string;
                    type: "button" | "submit" | "reset" | undefined;
                };
            };
        }>>, {
            text: string;
            HTMLAttributes: ButtonHTMLAttributes;
        }, {}>;
    };
};
export default _default;
