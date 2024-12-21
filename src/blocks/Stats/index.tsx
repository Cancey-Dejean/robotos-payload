import Container from '@/components/ui/container'
import SectionTitle from '@/components/SectionTitle'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import Card from '@/components/Cards/Card'
import Image from 'next/image'

export default function Stats(props) {
  const { headline, bgImg, content, image, headlineElement, statGroup } = props
  return (
    <section
      className="border-[16px] border-gray-900 bg-blue-300 bg-cover bg-fixed bg-center py-0 md:py-32"
      id="rarity"
      style={{
        backgroundImage: `url('${bgImg.url || '/images/diagrams.png'}')`,
      }}
    >
      <Container className="py-10">
        <Card className="mx-auto flex max-w-[740px] flex-col items-start gap-7 max-sm:rounded-none">
          <div className="flex flex-col gap-2">
            {headline && <SectionTitle as={headlineElement || 'h2'}>{headline}</SectionTitle>}

            {content && <RichText data={content} enableGutter={false} />}
          </div>

          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {statGroup.map(({ title, list, image }, index) => (
              <div className="grow" key={index}>
                <p className="mb-3 font-right-grotesk">{title}</p>
                {list && (
                  <div className="flex h-full flex-col gap-2">
                    {list?.map(({ label, value }, index) => (
                      <Statbar key={index} label={label} value={value} />
                    ))}

                    {/* {image && (

                    )} */}

                    {image && (
                      <div className="hidden h-full items-center justify-center md:flex">
                        <div className="relative h-[270px] w-[318px]">
                          <Media resource={image} alt={image.title || 'Image'} fill />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  )
}

const Statbar = ({ label, value }: { label: string; value: string }) => {
  return (
    <div key={`item-${label}`} className="grid grid-cols-2 items-start rounded p-2 odd:bg-blue-50">
      {value && <p className="font-bold">{value}</p>}
      {label && <p>{label}</p>}
    </div>
  )
}
