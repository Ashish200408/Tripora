import { useEffect } from 'react'

interface PageMetadataProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
}

function getDescriptionContent(description: string) {
  const normalized = description.trim().replace(/\s+/g, ' ')
  if (normalized.length <= 160) return normalized

  const shortened = normalized.slice(0, 157).replace(/\s+\S*$/, '')
  return `${shortened}…`
}

function updateMeta(attributes: Record<string, string>, content: string) {
  const selector = Object.entries(attributes)
    .map(([name, value]) => `meta[${name}="${value}"]`)
    .join('')
  let meta = document.head.querySelector<HTMLMetaElement>(selector)

  if (!meta) {
    meta = document.createElement('meta')
    Object.entries(attributes).forEach(([name, value]) => {
      meta?.setAttribute(name, value)
    })
    document.head.append(meta)
  }

  meta.content = content
}

export default function PageMetadata({
  title,
  description,
  image,
  imageAlt,
}: PageMetadataProps) {
  const descriptionContent = getDescriptionContent(description)

  useEffect(() => {
    document.title = title
    updateMeta({ name: 'description' }, descriptionContent)
    updateMeta({ property: 'og:title' }, title)
    updateMeta({ property: 'og:description' }, descriptionContent)
    updateMeta({ property: 'og:type' }, 'website')
    updateMeta(
      { name: 'twitter:card' },
      image ? 'summary_large_image' : 'summary',
    )

    if (image) {
      updateMeta({ property: 'og:image' }, image)
      if (imageAlt) updateMeta({ property: 'og:image:alt' }, imageAlt)
    } else {
      document.head
        .querySelector('meta[property="og:image"]')
        ?.remove()
      document.head
        .querySelector('meta[property="og:image:alt"]')
        ?.remove()
    }
  }, [descriptionContent, image, imageAlt, title])

  return null
}
