import Container from '@/components/ui/container'
import SubscribeForm from './SubscribeForm'
import SectionTitle from '@/components/SectionTitle'
import RichText from '@/components/RichText'

export default function Newsletter(props) {
  const { headline, content, btnLabel } = props

  return (
    <section className="py-20">
      <Container>
        <div className="mb-6 text-center">
          {headline && (
            <SectionTitle as="h2" className="mb-4" size="medium">
              {headline}
            </SectionTitle>
          )}

          {content && <RichText data={content} enableGutter={false} />}
        </div>

        <SubscribeForm btnLabel={btnLabel} />
      </Container>
    </section>
  )
}
