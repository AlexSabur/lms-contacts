import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import Contact from '@/data/contact'
import { JsonSerializer } from 'typescript-json-serializer';
import { useLocalStorage } from '@vueuse/core';
import { Denormalizer, Normalizer, Serializer } from '@paddls/ts-serializer';

const defaultSerializer = new JsonSerializer();
const KEY = 'STORE';

const serializer: Serializer = new Serializer(new Normalizer(), new Denormalizer());

const desirableData = (v: any) => {
  try {
    if (!v) {
      return [];
    }

    const object = JSON.parse(v);
    const data = serializer.deserializeAll(Contact, object);

    return data;

  } catch (error) {
    console.error(error, v)

    return [];
  }
}

const serializeData = (v: any) => {
  const json = serializer.serializeAll(v);

  return JSON.stringify(json)
}

export const useContactStore = defineStore('contact', () => {
  const contacts = useLocalStorage<Contact[]>(
    KEY,
    [],
    {
      serializer: {
        read: desirableData,
        write: serializeData,
      }
    }
  );

  const setDataFromRaw = (data: string) => {
    const backup = contacts.value;

    try {
      contacts.value = desirableData(data)
    } catch (error) {
      console.error(error)

      contacts.value = backup
    }
  }

  const getRawData = () => {
    return serializeData(contacts.value)
  }

  const clear = () => {
    contacts.value = []
  }

  const remove = (contact: Contact) => {
    const store = contacts.value.filter(item => item.id !== contact.id)

    contacts.value = store
  }

  const find = (id: string): Contact => {
    const value = contacts.value.find(contact => contact.id === id)

    if (value) {
      return Object.assign(Object.create(Object.getPrototypeOf(value)), value)
    }

    throw new Error(`not found ${id}`);
  }

  const make = () => {
    return new Contact;
  }

  const save = (contact: Contact) => {
    const index = contacts.value.findIndex(item => item.id === contact.id)

    if (index === -1) {
      const store = contacts.value
      store.push(contact)

      contacts.value = store

      return;
    }

    contacts.value[index] = contact
  }

  return {
    contacts,
    make,
    save,
    find,
    remove,
    setDataFromRaw,
    getRawData,
    clear,
  }
})
