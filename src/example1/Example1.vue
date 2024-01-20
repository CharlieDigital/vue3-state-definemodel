<template>
  <LabeledContainer label="Example1.vue">
    <h1>Example 1</h1>
    <p>Hello, {{ name.length === 0 ? "(enter your name below)" : name }}</p>
    <NameInput v-model="name"/>
  </LabeledContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LabeledContainer from '../components/LabeledContainer.vue'
import NameInput from './NameInput.vue'

const name = ref('')
</script>