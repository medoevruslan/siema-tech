import { Button } from '@/components/ui/button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export default meta

export const ButtonDefault: Story = {
  args: {
    children: 'Button',
    variant: 'primary'
  }
}
