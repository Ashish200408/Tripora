import type { ButtonHTMLAttributes, ReactNode } from 'react'

// =========================================================
// Button – Tripora reusable button component
// Variants: primary | secondary | ghost | outline
// Sizes:    sm | md | lg
// =========================================================

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-250 cursor-pointer border select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[#142A32] text-[#F8F7F3] border-[#142A32] hover:bg-[#1e3d4a] hover:border-[#1e3d4a] focus-visible:outline-[#142A32]',
  secondary:
    'bg-[#B68C63] text-[#F8F7F3] border-[#B68C63] hover:bg-[#a07a53] hover:border-[#a07a53] focus-visible:outline-[#B68C63]',
  ghost:
    'bg-transparent text-[#142A32] border-transparent hover:bg-[#142A32]/8 focus-visible:outline-[#142A32]',
  outline:
    'bg-transparent text-[#142A32] border-[#142A32]/30 hover:border-[#142A32] hover:bg-[#142A32]/5 focus-visible:outline-[#142A32]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-[4px]',
  md: 'px-6 py-3 text-sm rounded-[4px]',
  lg: 'px-8 py-4 text-base rounded-[4px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
