const IMAGE_WIDTHS = [480, 768, 1200, 1920, 2400] as const

export function getResponsiveImageSrcSet(src: string): string | undefined {
  if (!src.startsWith('https://images.unsplash.com/')) return undefined

  const imageUrl = new URL(src)
  return IMAGE_WIDTHS.map((width) => {
    imageUrl.searchParams.set('w', String(width))
    return `${imageUrl.href} ${width}w`
  }).join(', ')
}
