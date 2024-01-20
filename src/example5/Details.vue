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
        <button @click="cancel">Done</button>
        <button @click="done">Save</button>
      </div>
    </div>
    <p v-else>
      Select a contact
    </p>
  </LabeledContainer>
</template>

<script setup lang="ts">
import LabeledContainer from '../components/LabeledContainer.vue'
import { Contact } from './Model.ts'
import { useDetailsEditor } from './useDetailsEditor'

const selected = defineModel<Contact|undefined>({
  required: true
})

const {
  name,
  handle,
  cancel,
  done
} = useDetailsEditor(selected)
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