import { ref, watch } from "vue"
import { Contact } from "./Model"
import { nanoid } from "nanoid"

export function useContacts() {
  const selectedContact = ref<Contact>()

  const contacts = ref<Contact[]>([{
    id: nanoid(4),
    name: 'Charles',
    handle: '@chrlschn'
  }])

  watch (selectedContact, (newContact, oldContact) => {
    if (newContact?.id !== oldContact?.id) {
      return
    }

    if (!newContact) {
      return
    }

    // If the ID is the same, replace in the contacts as well.
    const index = contacts.value.findIndex(c => c.id === newContact?.id)

    if (index > -1) {
      contacts.value.splice(index, 1, newContact)
    }
  })

  function addContact() {
    contacts.value.push({
      id: nanoid(4),
      name: 'Name',
      handle: 'Handle'
    })
  }

  return {
    selectedContact,
    contacts,
    addContact
  }
}