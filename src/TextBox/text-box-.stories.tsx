import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useState } from 'react';
import { TextBox } from './text-box';

const meta: Meta<typeof TextBox> = {
  title: 'Components/TextBox',
  component: TextBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A text box component with customizable type, value, and background opacity.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("I'm a text box!");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <TextBox {...args} value={value} onChange={onChange} />;
  },
  args: {
    type: 'text',
    backgroundOpacity: 0.4,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default text box with type "text" and semi-transparent background.',
      },
    },
  },
};

export const PasswordType: Story = {
  render: (args) => {
    const [value, setValue] = useState('password');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <TextBox {...args} value={value} onChange={onChange} />;
  },
  args: {
    type: 'password',
    backgroundOpacity: 0.4,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A text box of type "password" that masks the input value for privacy.',
      },
    },
  },
};

export const CustomBackgroundOpacity: Story = {
  render: (args) => {
    const [value, setValue] = useState('I have a custom background opacity!');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return <TextBox {...args} value={value} onChange={onChange} />;
  },
  args: {
    type: 'text',
    backgroundOpacity: 0.7,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A text box with increased background opacity for better visibility.',
      },
    },
  },
};
