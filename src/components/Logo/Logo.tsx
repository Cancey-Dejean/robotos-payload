import { cn } from '@/utilities/cn'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      height={28}
      width={28}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={cn('max-w-[1.75] w-full h-[28px]', className)}
      src="/images/logo-icon.png"
    />
  )
}
