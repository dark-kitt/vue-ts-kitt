<template>
  <button>{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
  name?: string;
  text: string;
}

withDefaults(defineProps<Props>(), {
  text: 'button text'
})
</script>

<style lang="scss">
@import './style';
</style>