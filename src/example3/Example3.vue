<template>
  <LabeledContainer label="Example3.vue">
    <h1>Example 3</h1>

    <p v-if="!!selectedContact">
      Selected: {{ selectedContact.name }} ({{ selectedContact.handle  }})
    </p>

    <div class="parent">
      <Listing
        v-model="contacts"
        v-model:selected="selectedContact"/>

      <Details v-model="selectedContact"/>
    </div>
  </LabeledContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LabeledContainer from '../components/LabeledContainer.vue'
import Listing from './Listing.vue'
import Details from './Details.vue'
import { Contact } from './Model.ts'

const selectedContact = ref<Contact>()

const contacts = ref<Contact[]>([{
  name: 'Charles',
  handle: '@chrlschn'
}])
</script>

<style scoped>
.parent {
  width: 600px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 0px;
}
</style>