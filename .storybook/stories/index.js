import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import Toggles from '../../src/components/Toggles';
import Checkbox from '../../src/components/Checkbox';

storiesOf('Button', module)
  .add('orange', () => <Button onClick={action('Button clicked')}>Button</Button>)
  .add('blue', () => <Button theme="blue" onClick={action('Button clicked')}>Button</Button>)

storiesOf('Toggles', module)
  .add('blue', () => (
    <Toggles onClick={action('Toggles clicked')} options={[
      {
        isActive: true,
        label: 'RUB',
        value: 'rub',
      },
      {
        isActive: false,
        label: 'USD',
        value: 'usd',
      },
      {
        isActive: false,
        label: 'EUR',
        value: 'eur',
      },
    ]} />
  ))

storiesOf('Checkbox', module)
  .add('blue', () => (
    <Checkbox value="Checkbox" label="Checkbox" checked={true} onClick={action('Checkbox clicked')} />
  ))
