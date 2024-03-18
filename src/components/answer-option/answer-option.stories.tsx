import { AnswerOption } from '@/components/answer-option/answer-option';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Meta, StoryObj } from '@storybook/react';

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
} satisfies Meta<typeof AnswerOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnswerOptionInactive: Story = {
  args: {
    value: 'a',
  },
  render: ({ value }) => (
    <RadioGroup.Root>
      <AnswerOption value={value}>Question Option</AnswerOption>
    </RadioGroup.Root>
  ),
};

export const AnswerOptionSelected: Story = {
  args: {
    value: 'a',
    variant: 'selected',
  },
  render: ({ value, variant }) => (
    <RadioGroup.Root>
      <AnswerOption value={value} variant={variant}>
        Question Option
      </AnswerOption>
    </RadioGroup.Root>
  ),
};

export const AnswerOptionCorrect: Story = {
  args: {
    value: 'a',
    variant: 'correct',
  },
  render: ({ value, variant }) => (
    <RadioGroup.Root>
      <AnswerOption value={value} variant={variant}>
        Question Option
      </AnswerOption>
    </RadioGroup.Root>
  ),
};

export const AnswerOptionWrong: Story = {
  args: {
    value: 'a',
    variant: 'wrong',
  },
  render: ({ value, variant }) => (
    <RadioGroup.Root>
      <AnswerOption value={value} variant={variant}>
        Question Option
      </AnswerOption>
    </RadioGroup.Root>
  ),
};
