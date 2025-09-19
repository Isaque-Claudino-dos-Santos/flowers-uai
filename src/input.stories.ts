import type { Meta, StoryObj } from '@storybook/vue3-vite'
import InputText from './components/form/InputForm.vue'

const meta = {
  component: InputText,
} satisfies Meta<typeof InputText>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 'email',
    label: 'E-mail',
  },
}

export default meta
