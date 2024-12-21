import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/Button'
import Container from '@/components/ui/container'

export default function NotFound() {
  return (
    <Container className="py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">This page could not be found.</p>
      </div>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </Container>
  )
}
