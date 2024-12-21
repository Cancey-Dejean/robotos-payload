import Container from '@/components/ui/container'
// import SectionTitle from '../SectionTitle'

import { Media } from '@/components/Media'
import Availability from '@/components/Availability'
import Card from '@/components/Cards/Card'
import RichText from '@/components/RichText'
import SectionTitle from '@/components/SectionTitle'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function GetRobots(props) {
  const { topImage, content, availability, headline, headlineElement, cta, bgImg } = props

  return (
    <section
      className="bg-yellow-200 bg-fixed pb-20 pt-28 md:py-32"
      style={{
        backgroundImage: `url('${bgImg.url || '/images/get-robots-bg.png'}')`,
      }}
    >
      <Container size="contained" className="flex justify-center">
        <Card className="items-center text-center md:px-14">
          {/* Image */}
          <div className="relative mx-auto -mt-[80px] mb-8 size-28 overflow-hidden rounded-full border-[5px] border-gray-900 md:size-[190px]">
            {topImage && typeof topImage === 'object' && (
              <Media
                imgClassName="scale-[1.1]"
                priority
                resource={topImage}
                alt={topImage.alt || 'Image'}
              />
            )}
          </div>

          {/* Card */}
          <div className="mb-6 flex flex-col gap-4">
            {headline && <SectionTitle as={headlineElement || 'h2'}>{headline}</SectionTitle>}

            {content && <RichText className="mb-4" data={content} enableGutter={false} />}

            {cta && (
              <Button variant={cta.variant} asChild>
                <Link href={cta.link.url || '#'}>{cta.link.label}</Link>
              </Button>
            )}
          </div>

          {/* Availability */}
          {availability && <Availability />}
        </Card>
      </Container>
    </section>
  )
}
