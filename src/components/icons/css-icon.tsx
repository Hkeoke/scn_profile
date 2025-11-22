import { cn } from '@/lib/utils'
import React from 'react'

const CssIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" 
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("icon", className)}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M20 4l-2 14.5-6 2-6-2L4 4z" />
      <path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
    </svg>
  )
}

export default CssIcon