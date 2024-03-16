import { AnswerOption } from '@/components/answer-option/answer-option'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AnswerOption,
  tags: ['autodocs'],
  title: 'Components/AnswerOption',
} satisfies Meta<typeof AnswerOption>

export default meta

type Story = StoryObj<typeof meta>

export const AnswerOptionInactive: Story = {
  args: {
    children: <Typography variant={'option'}>Question Option</Typography>,
  },
  render: ({ children }) => {
    return <AnswerOption>{children}</AnswerOption>
  },
}

export const AnswerOptionSelected: Story = {
  args: {
    children: <Typography variant={'option'}>Question Option</Typography>,
    variant: 'selected',
  },
  render: ({ children, variant }) => {
    return <AnswerOption variant={variant}>{children}</AnswerOption>
  },
}

export const AnswerOptionCorrect: Story = {
  args: {
    children: <Typography variant={'option'}>Question Option</Typography>,
    variant: 'correct',
  },
  render: ({ children, variant }) => {
    return <AnswerOption variant={variant}>{children}</AnswerOption>
  },
}

export const AnswerOptionWrong: Story = {
  args: {
    children: <Typography variant={'option'}>Question Option</Typography>,
    variant: 'wrong',
  },
  render: ({ children, variant }) => {
    return <AnswerOption variant={variant}>{children}</AnswerOption>
  },
}
