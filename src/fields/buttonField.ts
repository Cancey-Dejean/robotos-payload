import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/constants'
import { Field } from 'payload'
import { link } from './link'

export const buttonField: Field = {
  name: 'button',
  label: 'Button',
  type: 'group',
  fields: [
    link({
      appearances: false,
    }),
    {
      name: 'variant',
      label: 'Variant',
      type: 'select',
      options: BUTTON_VARIANTS,
      defaultValue: 'default',
    },
    {
      name: 'size',
      label: 'Size',
      type: 'select',
      options: BUTTON_SIZES,
      defaultValue: 'default',
    },
  ],
}
