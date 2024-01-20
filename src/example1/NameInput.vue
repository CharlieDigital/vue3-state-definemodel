<template>
  <LabeledContainer label="NameInput.vue">
    <input v-model="name"/>
  </LabeledContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LabeledContainer from '../components/LabeledContainer.vue'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  'update:modelValue': [string]
}>()

const name = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})
</script>