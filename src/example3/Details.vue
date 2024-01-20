<template>
  <LabeledContainer label="Details.vue">
    <div v-if="!!selected">
      <label>
        Name
        <input v-model="name"/>
      </label>

      <label>
        Handle
        <input v-model="handle"/>
      </label>

      <div>
        <button @click="handleCancel">Done</button>
        <button @click="handleDone">Save</button>
      </div>
    </div>
    <p v-else>
      Select a contact
    </p>
  </LabeledContainer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import LabeledContainer from '../components/LabeledContainer.vue'
import { Contact } from './Model.ts'

const selected = defineModel<Contact|undefined>({
  required: true
})

const name = ref('')

const handle = ref('')

watch (selected, (contact) => {
  if (!contact) {
    return
  }

  name.value = contact.name,
  handle.value = contact.handle
})

function handleCancel() {
  selected.value = undefined
}

function handleDone() {
  if (!selected.value) {
    return
  }

  selected.value.name = name.value;
  selected.value.handle = handle.value;
}
</script>

<style scoped>
input {
  width: 90%;
  font-size: .9em
}

label {
  text-align: left;
  display: block;
  font-size: .8rem;
  font-weight: bold;
  margin-top: 4px;
}
</style>