import { useState, type ImgHTMLAttributes } from 'react'
import { getResponsiveImageSrcSet } from '../../utils/responsiveImage'

interface ImageWithFallbackProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> {
  src: string
  alt: string
  fallbackLabel?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackLabel = 'Image unavailable',
  className = '',
  decoding = 'async',
  onError,
  sizes,
  srcSet,
  ...imageProps
}: ImageWithFallbackProps) {
  const [hasFailed, setHasFailed] = useState(false)

  if (hasFailed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#142A32] to-[#1e3d4a] text-[#E9E2D5] ${className}`}
      >
        <span
          aria-hidden="true"
          className="px-4 text-center font-heading text-sm"
        >
          {fallbackLabel}
        </span>
      </div>
    )
  }

  return (
    <img
      {...imageProps}
      src={src}
      srcSet={srcSet ?? getResponsiveImageSrcSet(src)}
      sizes={sizes}
      alt={alt}
      decoding={decoding}
      className={className}
      onError={(event) => {
        onError?.(event)
        setHasFailed(true)
      }}
    />
  )
}
