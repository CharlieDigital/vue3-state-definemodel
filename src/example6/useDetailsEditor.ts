import { Ref, ref, watch } from "vue";
import { Contact } from "./Model";

export function useDetailsEditor(selectedContact: Ref<Contact|undefined>) {
  const name = ref('')

  const handle = ref('')

  watch (selectedContact, (contact) => {
    if (!contact) {
      return
    }

    name.value = contact.name,
    handle.value = contact.handle
  })

  function cancel() {
    selectedContact.value = undefined
  }

  function done() {
    if (!selectedContact.value) {
      return
    }

    // Replace the model
    selectedContact.value = {
      id: selectedContact.value.id,
      name: name.value,
      handle: handle.value
    }
  }

  return {
    name,
    handle,
    cancel,
    done
  }
}