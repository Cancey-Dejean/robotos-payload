import type { Block } from 'payload'
import { HEADLINE_ELEMENTS } from '@/constants'

export const Faq: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'headlineElement',
      type: 'select',
      options: HEADLINE_ELEMENTS,
      defaultValue: 'h2',
    },
    {
      name: 'questions',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
    },
  ],
  interfaceName: 'FaqBlock',
}
