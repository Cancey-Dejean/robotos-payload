'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import { motion } from 'motion/react'
import { Logo } from '@/components/Logo/Logo'
import HeaderNav from './Nav'
import useBodyOverflow from '@/hooks/useBodyOverflow'
import useCloseMobileMenuOnResize from '@/hooks/useCloseMobileMenuOnResize'
import { useEffect, useState } from 'react'
import useScrollDirection from '@/hooks/useScrollDirection'
import { cn } from '@/utilities/cn'
import Container from '@/components/ui/container'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'

interface HeaderClientProps {
  data: Header
}

export const NavlinkStyles =
  'rounded-lg p-4 text-base font-bold hover:text-[#bdbdbd] transition transition-colors duration-300'

export default function HeaderClient({ data }: HeaderClientProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hiddenMenu, setHiddenMenu] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    if (scrollDirection === 'down') {
      setHiddenMenu(true)
    } else {
      setHiddenMenu(false)
    }
  }, [scrollDirection])

  // handle body overflow when menu is open
  useBodyOverflow(menuOpen)

  // Close mobile menu on window resize
  useCloseMobileMenuOnResize(() => setMenuOpen(false))

  // Handle mobile menu
  function handleMobileMenu() {
    setMenuOpen((prev) => !prev)
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hiddenMenu ? '-100%' : '0%' }}
      transition={{ duration: 0.1 }}
      className={cn('fixed left-0 top-0 z-50 w-full p-2 transition-smooth')}
    >
      <Container className="flex items-center justify-between rounded-lg bg-gray-900 px-4 text-white sm:w-fit sm:justify-center">
        <div className="relative z-[52] flex items-center sm:border-r sm:border-r-white/20">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          <Link
            href="/"
            className={cn('after:absolute after:inset-0', NavlinkStyles)}
            onClick={menuOpen ? handleMobileMenu : undefined}
          >
            Robotos
          </Link>
        </div>

        <HeaderNav data={data} />

        {/* Mobile Menu */}
        <ul
          className={cn(
            'fixed left-0 top-0 z-[51] flex h-screen w-full max-w-full flex-col items-start justify-center bg-gray-900 px-5 transition-all duration-300 ease-in-out sm:hidden',
            menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
          )}
        >
          {data?.navItems?.map(({ link }, i) => (
            <li key={i} className="w-full">
              <Link
                href={link?.url || '#'}
                className={cn(NavlinkStyles, 'w-full text-3xl')}
                onClick={handleMobileMenu}
              >
                {link?.label}
              </Link>
              {/* <CMSLink
                {...link}
                appearance="link"
                className={cn(NavlinkStyles, 'w-full text-3xl')}
                handleMobileMenu={handleMobileMenu}
              /> */}
              {/* <NavLink
                    newTab={newTab}
                    url={url}
                    label={label}
                    cta={cta}
                    className="block w-full text-3xl"
                    handleMobileMenu={handleMobileMenu}
                  /> */}
            </li>
          ))}
          <li>
            <Link
              href={data?.cta?.link?.url || '#'}
              target={data?.cta?.link?.newTab ? '_blank' : '_self'}
              className="mt-4 bg-mint px-4 py-4 text-center text-gray-900 hover:bg-magenta hover:text-white sm:mt-0 sm:py-2 no-underline"
            >
              {data?.cta?.link?.label}
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={cn(
            'hamburger z-[52] flex size-10 cursor-pointer flex-col items-center justify-center gap-1 bg-transparent sm:hidden [&_span]:h-[1px] [&_span]:w-6 [&_span]:bg-white [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out [&_span]:sm:hover:bg-pink-200',
            menuOpen ? '[&_span]:bg-pink-200' : '[&_span]:bg-white',
          )}
          onClick={handleMobileMenu}
        >
          <span className="sr-only">Open Menu</span>
          <span
            className={cn(
              menuOpen ? '!w-[10px] -translate-x-[8px] translate-y-[1px] -rotate-45' : '',
            )}
          />
          <span className="bar-two" />
          <span
            className={cn(
              menuOpen ? '!w-[10px] -translate-x-[8px] translate-y-[-1px] rotate-45' : '',
            )}
          />
        </button>
      </Container>
    </motion.header>
  )
}
