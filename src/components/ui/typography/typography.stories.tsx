import {Typography} from "@/components/ui/typography/typography";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  component: Typography,
  argTypes: {
    variant: {
      control: {type: 'radio'},
      options: [
        'option',
        'question',
        'headline',
        'button',
      ],
    },
    mobile: {
      control: 'boolean',
    }
  },
  title: 'Components/Typography',
  tags: ['autodocs']
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Headline: Story = {
  args: {
    children: 'Headline Typography',
    variant: 'headline',
  },
}

export const Button: Story = {
  args: {
    children: 'Button Typography',
    variant: 'button',
  },
}

export const Option: Story = {
  args: {
    children: 'Option Typography',
    variant: 'option',
  },
}

export const Quesion: Story = {
  args: {
    children: 'Quesion Typography',
    variant: 'question',
  },
}


export const QuesionMobile: Story = {
  args: {
    children: 'Question Typography',
    variant: 'question',
    mobile: true
  },
}

export const HeadlineMobile: Story = {
  args: {
    children: 'Headline Typography',
    variant: 'headline',
    mobile: true
  },
}

export const ButtonMobile: Story = {
  args: {
    children: 'Button Typography',
    variant: 'button',
    mobile: true
  },
}

export const OptionMobile: Story = {
  args: {
    children: 'Option Typography',
    variant: 'option',
    mobile: true
  },
}


export const Link1: Story = {
  args: {
    children: 'Typography link1',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'Typography link2',
    variant: 'link2',
  },
}
