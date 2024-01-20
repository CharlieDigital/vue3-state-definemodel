<template>
  <LabeledContainer
    label="Contact.vue"
    class="contact"
    :class="{
      'selected': !!selected
    }">
    <p class="name">{{ contact.name }}</p>
    <p class="handle">{{ contact.handle }}</p>
  </LabeledContainer>
</template>

<script setup lang="ts">
import LabeledContainer from '../components/LabeledContainer.vue'
import { Contact } from './Model';

defineProps<{
  contact: Contact,
  selected?: boolean
}>()
</script>

<style scoped>
.contact {
  border: 1px dotted #999;
  border-radius: 8px;
  margin: 4px 8px 4px 4px;
}

.selected {
  border-color: rgb(0, 166, 255);
  background-color: rgb(190, 232, 255);
  color: rgb(0, 112, 173);
}

p {
  text-align: left;
  margin: 4px 8px;
}

.name {
  font-weight: bold;
  font-size: 0.9em;
}

.handle {
  font-size: 0.7em;
}
</style>