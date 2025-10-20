import type { Meta, StoryObj } from '@storybook/vue3-vite'
import InputProps from './components/form/Input.vue'
import { h } from 'vue'
import { PhCheckCircle, PhXCircle } from '@phosphor-icons/vue'

const meta = {
  component: InputProps,
} satisfies Meta<typeof InputProps>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 'email',
    label: 'E-mail',
    placeholder: '@gmail.com',
    required: true,
    nodes: {
      rigth: (meta) => {
        if (!meta.validated) return

        return meta.valid
          ? h(PhCheckCircle, { size: 24, color: 'green' })
          : h(PhXCircle, { size: 24, color: 'red' })
      },
    },
  },
}

export default meta
