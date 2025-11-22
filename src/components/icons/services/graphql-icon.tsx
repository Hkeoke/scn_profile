

import { cn } from '@/lib/utils'
import React from 'react'

const GraphQlIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="color(display-p3 .8824 0 .5961)"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 6.903l37.323 21.549v43.096L50 93.097 12.677 71.548V28.451L50 6.903zM16.865 30.87v31.656L44.28 15.041 16.864 30.87zM50 13.51L18.398 68.246h63.205L50 13.509zm27.415 58.924h-54.83L50 88.261l27.415-15.828zm5.72-9.908L55.72 15.041 83.136 30.87v31.656z"
      />
      <circle cx={50} cy={9.3209} r={8.82} />
      <circle cx={85.2292} cy={29.6605} r={8.82} />
      <circle cx={85.2292} cy={70.3396} r={8.82} />
      <circle cx={50} cy={90.6791} r={8.82} />
      <circle cx={14.7659} cy={70.3396} r={8.82} />
      <circle cx={14.7659} cy={29.6605} r={8.82} />
    </svg>

  )
}

export default GraphQlIcon