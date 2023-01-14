<template>
  <li>
    {{ list.name }} ({{ completed }} of {{ list.items.length  }})
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Checklist } from '../stores/appStore';

const props = defineProps<{
  list: Checklist
}>()

const completed = computed(() => props.list.items.filter(i => i.done).length)
</script>