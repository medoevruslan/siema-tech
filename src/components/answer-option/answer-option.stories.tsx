import { AnswerOption } from '@/components/answer-option/answer-option'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['correct', 'wrong', 'selected'],
    },
  },
  component: AnswerOption,
  tags: ['autodocs'],
  title: 'Components/AnswerOption',
} satisfies Meta<typeof AnswerOption>

export default meta

type Story = StoryObj<typeof meta>

export const AnswerOptionInactive: Story = {
  render: () => {
    return <AnswerOption>Question Option</AnswerOption>
  },
}

export const AnswerOptionSelected: Story = {
  args: {
    variant: 'selected',
  },
  render: ({ variant }) => {
    return <AnswerOption variant={variant}>Question Option</AnswerOption>
  },
}

export const AnswerOptionCorrect: Story = {
  args: {
    variant: 'correct',
  },
  render: ({ variant }) => {
    return <AnswerOption variant={variant}>Question Option</AnswerOption>
  },
}

export const AnswerOptionWrong: Story = {
  args: {
    variant: 'wrong',
  },
  render: ({ variant }) => {
    return <AnswerOption variant={variant}>Question Option</AnswerOption>
  },
}
