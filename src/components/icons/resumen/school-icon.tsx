import { cn } from '@/lib/utils'
import React from 'react'

const SchoolIcon = ({ className }: { className?: string }) => {
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
      <path d="M22 9L12 5 2 9l10 4 10-4v6" />
      <path d="M6 10.6V16a6 3 0 0012 0v-5.4" />
    </svg>
  )
}

export default SchoolIcon