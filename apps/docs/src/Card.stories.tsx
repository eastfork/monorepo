import React from 'react';

import { Meta, Story } from '@storybook/react';
import { Card } from '@abacus/components';

export default {
  title: 'JBL/Card',
  component: Card,
} as Meta;

// We create a “template” of how args map to rendering
type CardProps = React.ComponentProps<typeof Card>;
const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { heading: 'Primary Card', text: 'lorem ipsum' };

export const Secondary = Template.bind({});
Primary.args = { heading: 'Secondary Card', text: 'lorem ipsum' };
