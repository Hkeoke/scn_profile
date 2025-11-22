import { cn } from '@/lib/utils'
import React from 'react'

const BusinessIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('icon', className)}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  )
}

export default BusinessIcon