import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Header } from '@/payload-types'
import HeaderClient from './Component.client'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData as Header} />
}
