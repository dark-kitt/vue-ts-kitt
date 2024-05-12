import { StoryObj } from '@storybook/vue3';
import { DefineComponent, PropType, ButtonHTMLAttributes, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';

declare const meta: {
    title: string;
    component: DefineComponent<{
        primary: {
            type: PropType<boolean>;
            default: boolean;
        };
        size: {
            type: PropType<"small" | "medium" | "large">;
            default: string;
        };
        text: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        htmlAttributes: {
            type: PropType<ButtonHTMLAttributes>;
            default: () => {
                name: string;
                type: "button" | "submit" | "reset" | undefined;
                disabled: boolean;
            };
        };
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
        primary: {
            type: PropType<boolean>;
            default: boolean;
        };
        size: {
            type: PropType<"small" | "medium" | "large">;
            default: string;
        };
        text: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        htmlAttributes: {
            type: PropType<ButtonHTMLAttributes>;
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
        htmlAttributes: ButtonHTMLAttributes;
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
