<template>
  <button
    v-bind="HTMLAttributes"
    class="kitt-button"
    :class="[primary ? 'kitt-button--primary' : null, size ? `kitt-button--${size}` : null]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import i18n from './Button-i18n.json';

export interface Props {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  text: string;
  HTMLAttributes?: ButtonHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  primary: true,
  size: 'medium',
  text: i18n.text,
  HTMLAttributes: () => ({
    name: i18n.HTMLAttributes.name,
    type: i18n.HTMLAttributes.type as ButtonHTMLAttributes['type'],
    disabled: false
  })
});
</script>

<style lang="scss">
@import './Button';
</style>
