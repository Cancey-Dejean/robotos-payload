'use client'
import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/cn'
import { NavlinkStyles } from '../Component.client'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function HeaderNav({ data }: { data: HeaderType }) {
  const navItems = data?.navItems || []
  const cta = data?.cta?.link

  return (
    <nav className="flex items-center gap-4">
      <ul className="hidden items-center sm:flex">
        {navItems.map(({ link }, i) => {
          return (
            <li key={i}>
              <Link href={link?.url || '#'} className={cn(NavlinkStyles, 'hover:no-underline')}>
                {link?.label}
              </Link>
              {/* <CMSLink
                {...link}
                appearance="link"
                className={cn(NavlinkStyles, 'hover:no-underline')}
              /> */}
            </li>
          )
        })}

        <li>
          <Link
            href={cta?.url || '#'}
            className={cn(
              NavlinkStyles,
              'mt-4 bg-mint px-4 py-4 text-center font-bold text-gray-900 hover:bg-magenta hover:text-white sm:mt-0 sm:py-2 no-underline',
            )}
          >
            {cta?.label}
          </Link>
          {/* <Button asChild> */}

          {/* <CMSLink
              label={cta?.label}
              appearance="link"
              url={cta?.url}
              newTab={cta?.newTab}
              className={cn(
                NavlinkStyles,
                'mt-4 bg-mint px-4 py-4 text-center font-bold text-gray-900 hover:bg-magenta hover:text-white sm:mt-0 sm:py-2 no-underline',
              )}
            /> */}
          {/* </Button> */}
        </li>
      </ul>
    </nav>
  )
}
