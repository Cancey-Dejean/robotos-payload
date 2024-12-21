import type { Meta, StoryObj } from '@storybook/react'
import HeaderClient from './Component.client'

const meta = {
  title: 'Marketing/Header',
  component: HeaderClient,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeaderClient>

export default meta
type Story = StoryObj<typeof meta>

const data = {
  id: 1,
  navItems: [
    {
      id: '1',
      link: {
        label: 'Home',
        url: '/',
        newTab: false,
      },
    },
    {
      id: '2',
      link: {
        label: 'Rarity',
        url: '/',
        newTab: false,
      },
    },
    {
      id: '3',
      link: {
        label: 'Blog',
        url: '/',
        newTab: false,
      },
    },
  ],
  cta: {
    link: {
      id: '1',
      label: 'Call to Action',
      url: '/',
      newTab: false,
    },
  },
}

export const Default: Story = {
  args: {
    data: data,
  },
}
