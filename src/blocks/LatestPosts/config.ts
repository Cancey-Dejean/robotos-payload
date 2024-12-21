import { ButtonSize, ButtonVariant } from '@/fields/button'
import { link } from '@/fields/link'
import type { Block } from 'payload'

export const LatestPosts: Block = {
  slug: 'latestPosts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLabel',
      type: 'text',
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        link({
          appearances: false,
        }),
        ButtonVariant,
        ButtonSize,
      ],
    },
  ],
  interfaceName: 'LatestPostsBlock',
}
