import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { HEADLINE_ELEMENTS } from '@/constants'
import { link } from '@/fields/link'
import { ButtonSize, ButtonVariant } from '@/fields/button'
import { BackgroundImage } from '@/fields/image'

export const GetRobots: Block = {
  slug: 'getRobots',
  fields: [
    BackgroundImage,
    {
      name: 'topImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
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
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
      required: true,
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
    {
      name: 'availability',
      type: 'checkbox',
    },
  ],
  interfaceName: 'GetRobotsBlock',
}
