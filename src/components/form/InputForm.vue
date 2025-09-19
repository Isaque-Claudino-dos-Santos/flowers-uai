<template>
  <div>
    <div class="flex flex-col border rounded p-2" @click="() => console.log('ok')">
      <label :for="id" class="text-nowrap">{{ label }}</label>
      <input hidden v-model="value" :id="id" :name="id" class="w-full border p-1" />
    </div>
    <ul class="rounded px-1 w-max">
      <li v-for="(error, indexError) in errors" :key="indexError" class="text-red-700">
        - {{ error }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

export interface BaseInputProps {
  id: string
  defaultValue?: string
  label?: string
}

const { id, defaultValue, label } = defineProps<BaseInputProps>()
const { value, errors } = useField(() => id, undefined, {
  initialValue: defaultValue,
})
</script>
