import { StoryObj } from '@storybook/vue3';
import { DefineComponent, PropType, LinkHTMLAttributes, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';

declare const meta: {
    title: string;
    component: DefineComponent<{
        text: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        htmlAttributes: {
            type: PropType<LinkHTMLAttributes>;
            default: () => {
                href: string;
                target: string;
                rel: string;
            };
        };
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
        text: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        htmlAttributes: {
            type: PropType<LinkHTMLAttributes>;
            default: () => {
                href: string;
                target: string;
                rel: string;
            };
        };
    }>>, {
        text: string;
        htmlAttributes: LinkHTMLAttributes;
    }, {}>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
