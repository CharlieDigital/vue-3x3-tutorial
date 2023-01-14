<template>
  <div>
    <input type="text" v-model="username"/><br />
    <button
      @click="checkUsername"
      :disabled="username == ''">
      Login
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/appStore'

const username = ref('')
const router = useRouter()
const app = useAppStore()
const spacing = '8px'

function checkUsername() {
  if (username.value === 'admin') {
    app.loggedIn = true
    app.username = username.value
    router.push({ path: '/' })
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  margin-bottom: v-bind(spacing);
  padding: v-bind(spacing);
  border-radius: v-bind(spacing);
}
</style>