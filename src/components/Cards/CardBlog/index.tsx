import Link from 'next/link'

import { cn } from '@/utilities/cn'
import { Post } from '@/payload-types'
import Card from '../Card'
import { Media } from '@/components/Media'
import Image from 'next/image'

export default function CardBlog({
  className,
  buttonLabel,
  post,
}: {
  className?: string
  buttonLabel?: string
  post: Post
}) {
  const { title, slug, heroImage, meta } = post

  return (
    <Card className={cn('relative flex flex-col items-start gap-5 p-4 md:p-5', className)}>
      {heroImage && typeof heroImage === 'object' && (
        <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] lg:h-[200px]">
          <Media
            imgClassName="object-cover object-center"
            resource={heroImage}
            alt={heroImage.alt || 'Image'}
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="text-xl">{title}</h3>

        {meta?.description && <div className="line-clamp-2">{meta.description}</div>}
      </div>

      <div className="mt-auto flex w-full items-center justify-between gap-2">
        <Link href={`/posts/${slug}`} className="after:absolute after:inset-0">
          {buttonLabel || 'Read More'} →
        </Link>

        <div className="relative size-12 overflow-hidden rounded-full border border-black">
          <Image src="/images/headshot.jpeg" fill alt={'Author'} className="object-cover" />
        </div>
      </div>
    </Card>
  )
}
