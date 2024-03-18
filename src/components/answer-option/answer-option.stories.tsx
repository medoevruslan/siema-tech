import { AnswerOption } from '@/components/answer-option/answer-option';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: {
    view: {
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
    view: 'selected',
  },
  render: ({ value, view }) => (
    <RadioGroup.Root>
      <AnswerOption value={value} view={view}>
        Question Option
      </AnswerOption>
    </RadioGroup.Root>
  ),
};

export const AnswerOptionCorrect: Story = {
  args: {
    value: 'a',
    view: 'correct',
  },
  render: ({ value, view }) => (
    <RadioGroup.Root>
      <AnswerOption value={value} view={view}>
        Question Option
      </AnswerOption>
    </RadioGroup.Root>
  ),
};

export const AnswerOptionWrong: Story = {
  args: {
    value: 'a',
    view: 'wrong',
  },
  render: ({ value, view }) => (
    <RadioGroup.Root>
      <AnswerOption value={value} view={view}>
        Question Option
      </AnswerOption>
    </RadioGroup.Root>
  ),
};
