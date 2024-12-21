import { getPayload } from 'payload'
import Container from '@/components/ui/container'
import configPromise from '@payload-config'
import SectionTitle from '@/components/SectionTitle'
import CardBlog from '@/components/Cards/CardBlog'
import { Post } from '@/payload-types'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function LatestPosts(props) {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 3,
    overrideAccess: false,
    select: {
      title: true,
      heroImage: true,
      relatedPosts: true,
      categories: true,
      slug: true,
      authors: true,
      meta: {
        description: true,
      },
    },
  })

  // console.log(posts)
  const { title, buttonLabel } = props
  return (
    <section className="bg-white py-16 md:py-32">
      <Container>
        <SectionTitle as={'h2'} className="mb-5">
          {title}
        </SectionTitle>

        {posts.docs.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.docs.map((post: Post) => (
              <div key={post.id}>
                <CardBlog post={post} buttonLabel={buttonLabel} className="h-full" />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
