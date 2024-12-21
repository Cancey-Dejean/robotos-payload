import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { HeadlineElement } from '@/fields/headline'
import { BackgroundImage } from '@/fields/image'

export const Stats: Block = {
  slug: 'stats',
  fields: [
    BackgroundImage,
    {
      name: 'headline',
      type: 'text',
    },
    HeadlineElement,
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
    },
    {
      name: 'statGroup',
      minRows: 1,
      maxRows: 4,
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'list',
          type: 'array',
          minRows: 1,
          maxRows: 13,
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'value',
              type: 'text',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  interfaceName: 'StatsBlock',
}
