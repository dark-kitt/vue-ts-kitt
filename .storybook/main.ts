import type { StorybookConfig } from '@storybook/vue3-vite';
import { join, dirname } from 'path';
import { UserConfig, PluginOption } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string): string => {
  return dirname(require.resolve(join(value, 'package.json')));
};

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.ts'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: (config: UserConfig) => {
    /**
     * Remove the vite-plugin-dts to prevent
     * that Storybook creates TS types. Otherwise
     * the dts plugin runs twice with two different
     * configurations in the GitHub CI/CD pipeline.
     */
    config.plugins = (config.plugins as PluginOption[])?.filter(
      (plugin: PluginOption) => (plugin as any)?.name !== 'vite:dts'
    );

    return config;
  }
};

export default config;
