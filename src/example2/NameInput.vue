<template>
  <LabeledContainer label="NameInput.vue">
    <input v-model="name"/>
  </LabeledContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LabeledContainer from '../components/LabeledContainer.vue'

const name = defineModel<string>({
  required: true
})
</script>