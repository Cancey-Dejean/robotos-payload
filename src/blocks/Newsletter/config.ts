import { Content } from '@/fields/content'
import type { Block } from 'payload'

export const Newsletter: Block = {
  slug: 'newsletter',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    Content,
    {
      name: 'btnLabel',
      type: 'text',
      defaultValue: 'Subscribe',
    },
  ],
  interfaceName: 'NewsletterBlock',
}
