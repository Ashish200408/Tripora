import type { ElementType, ReactNode } from 'react'

// =========================================================
// Container – Tripora page-width wrapper
// Provides consistent max-width and horizontal padding
// =========================================================

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
  narrow?: boolean
}

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
  narrow = false,
}: ContainerProps) {
  const widthClass = narrow ? 'max-w-3xl' : 'max-w-7xl'

  return (
    <Tag
      className={`${widthClass} mx-auto w-full px-6 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </Tag>
  )
}
