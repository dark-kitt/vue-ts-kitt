import { StoryObj } from '@storybook/vue3';

declare const meta: {
    title: string;
    component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        primary: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
            default: string;
        };
        text: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
            default: string;
        };
        HTMLAttributes: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('../../../vue/dist/vue.esm-bundler.js').ButtonHTMLAttributes>;
            default: () => {
                name: string;
                type: "button" | "submit" | "reset" | undefined;
                disabled: boolean;
            };
        };
    }, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        primary: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
            default: string;
        };
        text: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
            default: string;
        };
        HTMLAttributes: {
            type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('../../../vue/dist/vue.esm-bundler.js').ButtonHTMLAttributes>;
            default: () => {
                name: string;
                type: "button" | "submit" | "reset" | undefined;
                disabled: boolean;
            };
        };
    }>>, {
        primary: boolean;
        size: "small" | "medium" | "large";
        text: string;
        HTMLAttributes: import('../../../vue/dist/vue.esm-bundler.js').ButtonHTMLAttributes;
    }, {}>;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
    };
    args: {
        primary: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
