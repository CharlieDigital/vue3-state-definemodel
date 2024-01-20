<template>
  <LabeledContainer label="Listing.vue">
    <div class="container">
      <ContactItem
        v-for="contact in contacts"
        :contact="contact"
        :selected="selected == contact"
        @click="selected = contact">
      </ContactItem>
    </div>

    <div>
      <button @click="handleAddContact">Add contact</button>
    </div>
  </LabeledContainer>
</template>

<script setup lang="ts">
import LabeledContainer from '../components/LabeledContainer.vue'
import { Contact } from './Model.ts'
import ContactItem from './ContactItem.vue'

const contacts = defineModel<Contact[]>({
  required: true
})

const selected = defineModel<Contact|undefined>('selected', {
  required: true
})

function handleAddContact() {
  contacts.value.push({
    name: 'Name',
    handle: 'Handle'
  })
}
</script>

<style scoped>
.container {
  padding: 4px;
  border-radius: 8px;
  background-color: #f3f3f3;
}
</style>