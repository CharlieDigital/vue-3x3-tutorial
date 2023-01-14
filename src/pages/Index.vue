<template>
  <ul v-if="app.checklists.length > 0">
    <checklist v-for="list in app.sortedFilteredChecklists"
      :list="list"
      :key="list.name"
      @click="app.selectedChecklist = list"/>
  </ul>
  <p v-else>No lists yet!</p>

  <input type="text" v-model="checklistName"/>
  <button @click="addChecklist" :disabled="disableButton">Add a list</button>
  <br/>
  <label><input type="checkbox" v-model="app.hidePrivate"/> Hide private</label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '../stores/appStore'
import checklist from '../components/Checklist.vue'

const checklistName = ref('')
const app = useAppStore()

const disableButton = computed(() =>
  checklistName.value === ''
    || app.checklists.some(c => c.name === checklistName.value)
)

function addChecklist() {
  app.checklists.push({
    name: checklistName.value,
    items: []
  })

  checklistName.value = ''
}
</script>

<style scoped>

</style>