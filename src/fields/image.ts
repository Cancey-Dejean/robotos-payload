import { Field } from 'payload'

export const BackgroundImage: Field = {
  name: 'bgImg',
  type: 'upload',
  label: 'Background Image',
  relationTo: 'media',
}
