

import { cn } from '@/lib/utils'
import React from 'react'

const BlockIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('w-6 h-6', className)}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M14 4a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1zM3 14h12a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3a2 2 0 012 2v12" />
    </svg>

  )
}

export default BlockIcon