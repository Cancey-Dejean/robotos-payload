import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/constants'
import { Field } from 'payload'

export const ButtonVariant: Field = {
  name: 'variant',
  label: 'Variant',
  type: 'select',
  options: BUTTON_VARIANTS,
  defaultValue: 'default',
}

export const ButtonSize: Field = {
  name: 'size',
  label: 'Size',
  type: 'select',
  options: BUTTON_SIZES,
  defaultValue: 'default',
}
