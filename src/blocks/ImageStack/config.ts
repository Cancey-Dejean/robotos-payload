import type { Block } from 'payload'

export const ImageStack: Block = {
  slug: 'imageStack',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  interfaceName: 'ImageStackBlock',
}
