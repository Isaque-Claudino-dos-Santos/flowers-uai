<template>
  <div class="input">
    <label v-if="label" :for="id" class="input-label">
      {{ label }}
      <span v-if="required" class="input-label__require">*</span>
    </label>

    <div class="input-container">
      <component v-if="nodes?.left" :is="nodes.left(meta)" />
      <input
        v-model="value"
        :id="id"
        :name="id"
        class="input-field"
        :placeholder="placeholder"
        v-maska="mask"
        v-bind="native"
      />
      <component v-if="nodes?.rigth" :is="nodes.rigth(meta)" />
    </div>

    <div class="input-errors" v-if="errorMessage">
      <p class="input-errors-text">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField, type FieldMeta } from 'vee-validate'
import { type Component, type InputHTMLAttributes } from 'vue'
import { vMaska } from 'maska/vue'

export interface InputProps {
  id: string
  defaultValue?: string
  label?: string
  placeholder?: string
  mask?: string
  required?: boolean
  nodes?: {
    left?: (fieldMeta: FieldMeta<string>) => Component | undefined
    rigth?: (fieldMeta: FieldMeta<string>) => Component | undefined
  }
  native?: InputHTMLAttributes
}

const {
  id,
  defaultValue,
  label,
  placeholder,
  nodes,
  mask,
  required = false,
} = defineProps<InputProps>()

const { value, meta, errorMessage } = useField(() => id, undefined, {
  initialValue: defaultValue,
})
</script>

<style lang="css">
@reference 'tailwindcss';

.input {
  @apply relative flex flex-col w-max;
}

.input-label {
  @apply flex;
}
.input-container {
  @apply relative flex items-center border rounded w-max p-1;
}

.input-label__require {
  @apply text-red-600;
}

.input-field {
  /* EMPTY */
}
.input-errors {
  /* EMPTY */
}

.input-errors-text {
  @apply text-red-700;
}
</style>
