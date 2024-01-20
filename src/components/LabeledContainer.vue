<template>
  <div class="component" :data-label="label">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<style scoped>

</style>