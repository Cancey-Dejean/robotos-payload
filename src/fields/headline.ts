import { HEADLINE_ELEMENTS } from '@/constants'
import { Field } from 'payload'

export const HeadlineElement: Field = {
  name: 'headlineElement',
  type: 'select',
  options: HEADLINE_ELEMENTS,
  defaultValue: 'h2',
}
