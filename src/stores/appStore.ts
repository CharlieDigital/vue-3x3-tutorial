import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const username = ref('')
  const loggedIn = ref(false)
  const hidePrivate = ref(false)
  const checklists = ref<Checklist[]>([])
  const selectedChecklist = ref<Checklist>()

  const sortedFilteredChecklists = computed(() => checklists.value
    .filter(c => hidePrivate.value ? c.name.indexOf('private') < 0 : true)
    .sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  )

  return {
    username,
    loggedIn,
    hidePrivate,
    selectedChecklist,
    checklists,
    sortedFilteredChecklists
  }
})

export type Item = {
  done: boolean
  title: string
}

export type Checklist = {
  name: string
  items: Item[]
}