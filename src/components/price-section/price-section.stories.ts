import { PriceSection } from '@/components/price-section/price-section'
import { getQuiz } from '@/data/getQuiz'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PriceSection,
  tags: ['autodocs'],
  title: 'Components/PriceSection',
} satisfies Meta<typeof PriceSection>

export default meta

type Story = StoryObj<typeof meta>

export const PriceSectionDefault: Story = {
  args: {
    prices: getQuiz()
      .map(q => Number(q.price))
      .sort((a, b) => b - a),
  },
}

export const PriceSectionWithDisabledOptions: Story = {
  args: {
    prices: getQuiz()
      .map(q => Number(q.price))
      .sort((a, b) => b - a),
  },
}
