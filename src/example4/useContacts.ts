import { ref } from "vue"
import { Contact } from "./Model"

export function useContacts() {
  const selectedContact = ref<Contact>()

  const contacts = ref<Contact[]>([{
    name: 'Charles',
    handle: '@chrlschn'
  }])

  function addContact() {
    contacts.value.push({
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