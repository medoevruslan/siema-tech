import { QuestionSection } from '@/components/question-section/question-section'
import { getQuiz } from '@/data/getQuiz'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: QuestionSection,
  tags: ['autodocs'],
  title: 'Components/QuestionSection',
} satisfies Meta<typeof QuestionSection>

export default meta

type Story = StoryObj<typeof meta>

export const QuestionSectionDefault: Story = {
  args: {
    quiz: getQuiz()[0],
  },
}
