<template>
  <button v-bind="HTMLAttributes">{{ text }}</button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import i18n from './i18n.json';

export interface Props {
  text: string;
  HTMLAttributes?: ButtonHTMLAttributes;
}

withDefaults(defineProps<Props>(), {
  text: i18n.text,
  HTMLAttributes: () => ({
    name: i18n.HTMLAttributes.name,
    type: i18n.HTMLAttributes.type as ButtonHTMLAttributes['type'],
    disabled: false
  })
});
</script>

<style lang="scss">
@import './style';
</style>
