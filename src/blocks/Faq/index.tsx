'use client'

import React, { useRef } from 'react'
import Container from '@/components/ui/container'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { containerStaggerVariants, faqVariants } from '@/utilities/animations'
import SectionTitle from '@/components/SectionTitle'
import { cn } from '@/utilities/cn'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export default function Faq(props) {
  const { headline, headlineElement, questions } = props

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const imageStyles =
    'relative odd:rotate-[-10deg] even:rotate-[20deg] lg:max-w-[130px] size-[130px] '

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerStaggerVariants}
      className="relative bg-blue-50 pb-16 pt-32 md:py-52 overflow-hidden"
      id="faq"
    >
      <Container size="contained">
        {headline && (
          <SectionTitle as={headlineElement} className="mb-14">
            {headline || 'Frequently Asked Questions'}
          </SectionTitle>
        )}

        {questions.length > 0 && (
          <div className="flex flex-col gap-12 md:gap-24">
            {questions.map(({ title, content, image }, index) => (
              <motion.div key={index} variants={faqVariants}>
                {/* {faqs_id.image && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${faqs_id.image.filename_disk}?key=optimized`}
                    alt={faqs_id.image.title || 'Icon'}
                    height={faqs_id.image.height || 160}
                    width={faqs_id.image.width || 160}
                    className="mb-3"
                  />
                )} */}

                {image && typeof image === 'object' && (
                  <Media
                    imgClassName="mb-3 max-w-[90px]"
                    resource={image}
                    alt={image.alt || 'Image'}
                  />
                )}

                <h3 className="mb-3 text-2xl">{title}</h3>
                {content && <RichText className="mb-4" data={content} enableProse={true} />}
              </motion.div>
            ))}
          </div>
        )}
      </Container>

      {/* Top */}
      <div className="absolute -top-[10px] left-1/2 flex w-[90%] -translate-x-1/2 justify-around gap-6 md:w-[68%]">
        {/* Top Image One */}
        <div className={cn(imageStyles, 'hidden sm:block')}>
          <Image src="/images/head11.svg" className="-mt-[20px]" fill alt="" />
        </div>

        {/* Top Image Two */}
        <div className={cn(imageStyles, 'hidden sm:block')}>
          <Image src="/images/head02.svg" fill alt="" />
        </div>

        {/* Top Image Three */}
        <div className={cn(imageStyles, '-mt-[40px] sm:mt-0')}>
          <Image src="/images/icon-256w.png" className="mt-2" fill alt="" />
        </div>
      </div>

      {/* Right */}
      <div className="absolute right-0 top-0 hidden h-full flex-col justify-around xl:flex">
        {/* Right Image One */}
        <div className={cn('mr-5', imageStyles)}>
          <Image src="/images/head23.svg" fill alt="" />
        </div>

        {/* Right Image Two */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head12.svg" fill alt="" />
        </div>

        {/* Right Image Three */}
        <div className={cn('right-5', imageStyles)}>
          <Image src="/images/head21.svg" fill alt="" />
        </div>

        {/* Right Image Four */}
        <div className={cn('right-3', imageStyles)}>
          <Image src="/images/head22.svg" className="rotate-[-20deg]" fill alt="" />
        </div>

        {/* Right Image Five */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head20.svg" fill alt="" />
        </div>

        {/* Right Image Six */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head14.svg" fill alt="" />
        </div>

        {/* Right Image Seven */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head18.svg" fill alt="" />
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute -bottom-[10px] left-1/2 flex w-[90%] -translate-x-1/2 justify-around gap-6 md:w-[68%]">
        {/* Bottom Image One */}
        <div className={cn(imageStyles, 'hidden sm:block')}>
          <Image src="/images/head27.svg" className="-mt-[20px]" fill alt="" />
        </div>

        {/* Bottom Image Two */}
        <div className={cn(imageStyles, 'hidden sm:block')}>
          <Image src="/images/head17.svg" fill alt="" />
        </div>

        {/* Bottom Image Three */}
        <div className={cn(imageStyles, 'hidden sm:block')}>
          <Image src="/images/head19.svg" className="mt-2" fill alt="" />
        </div>
      </div>

      {/* Left */}
      <div className="absolute left-0 top-0 hidden h-full flex-col justify-around xl:flex">
        {/* Left Image One */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head04.svg" className="-rotate-[20deg]" fill alt="" />
        </div>

        {/* Left Image Two */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head26.svg" className="ml-[-40px]" fill alt="" />
        </div>

        {/* Left Image Three */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head29.svg" className="ml-[20px]" fill alt="" />
        </div>

        {/* Left Image Four */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head27.svg" fill alt="" />
        </div>

        {/* Left Image Five */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head25.svg" className="ml-[-40px]" fill alt="" />
        </div>

        {/* Left Image Six */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head24.svg" fill alt="" />
        </div>
        <div className={cn(imageStyles)}>
          <Image src="/images/head05.svg" fill alt="" />
        </div>
      </div>
    </motion.section>
  )
}
