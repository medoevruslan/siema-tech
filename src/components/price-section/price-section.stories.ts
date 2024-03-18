import { PriceSection } from '@/components/price-section/price-section';
import { getQuiz } from '@/data/getQuiz';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: PriceSection,
  tags: ['autodocs'],
  title: 'Components/PriceSection',
} satisfies Meta<typeof PriceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PriceSectionDefault: Story = {
  args: {
    currentOptionId: getQuiz()[0].id,
    prices: getQuiz().map(q => ({
      completed: q.completed,
      id: q.id,
      value: q.price,
    })),
  },
};

export const PriceSectionWithDisabledOptions: Story = {
  args: {
    currentOptionId: getQuiz()[3].id,
    prices: getQuiz().map((q, idx) => ({
      completed: idx < 3,
      id: q.id,
      value: q.price,
    })),
  },
};
