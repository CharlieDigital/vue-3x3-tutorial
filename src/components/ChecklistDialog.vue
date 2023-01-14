<template>
  <dialog :open="visible">
    <button @click="app.selectedChecklist = undefined">Close</button>
    <br />
    Editing list: {{ app.selectedChecklist?.name  }}
    <ol>
      <li v-for="item in app.selectedChecklist?.items">
        <label><input type="checkbox" v-model="item.done"/> {{ item.title }}</label>
      </li>
    </ol>

    <input type="text" v-model="newItemName"/>
    <button
      :disabled="newItemName === ''"
      @click="addNewItem">
      Add
    </button>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '../stores/appStore'

const visible = ref(false)
const newItemName = ref('')

const app = useAppStore()

watch(() => app.selectedChecklist, (newValue) => {
  visible.value = !!newValue
})

function addNewItem() {
  app.selectedChecklist?.items.push({
    done: false,
    title: newItemName.value
  })
  newItemName.value = ''
}
</script>

<style scoped>
dialog {
  position: absolute;
  margin-top: -200px;
  width: 300px;
  height: 200px;
  background-color: #333;
}
</style>