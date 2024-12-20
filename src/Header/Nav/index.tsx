'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/utilities/cn'
import { NavlinkStyles } from '../Component.client'
import { Button } from '@/components/ui/button'

// export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
//   const navItems = data?.navItems || []

//   return (
//     <nav className="flex gap-3 items-center">
//       {navItems.map(({ link }, i) => {
//         return <CMSLink key={i} {...link} appearance="link" />
//       })}
//       <Link href="/search">
//         <span className="sr-only">Search</span>
//         <SearchIcon className="w-5 text-primary" />
//       </Link>
//     </nav>
//   )
// }

export default function HeaderNav({ data }: { data: HeaderType }) {
  const navItems = data?.navItems || []
  const cta = data?.cta.link

  console.log(data)
  return (
    <nav className="flex items-center gap-4">
      <ul className="hidden items-center sm:flex">
        {navItems.map(({ link }, i) => {
          return (
            <li key={i}>
              <CMSLink
                {...link}
                appearance="link"
                className={cn(NavlinkStyles, 'hover:no-underline')}
              />
            </li>
          )
        })}

        <li>
          <Button asChild>
            <CMSLink
              label={cta?.label}
              appearance="link"
              url={cta?.url}
              newTab={cta?.newTab}
              className={cn(
                NavlinkStyles,
                'mt-4 bg-mint px-4 py-4 text-center font-bold text-gray-900 hover:bg-magenta hover:text-white sm:mt-0 sm:py-2 no-underline',
              )}
            />
          </Button>
        </li>
      </ul>
    </nav>
  )
}
