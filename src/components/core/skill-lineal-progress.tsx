import React from 'react'
import { Progress } from '../ui/progress'

type Props = {
  percent: number,
  skill: string
}
const SkillLinealProgress = ({ percent, skill }: Props) => {
  const [progress, setProgress] = React.useState(15)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percent), 500)
    return () => clearTimeout(timer)
  }, [percent])

  return (
    <div className="w-full flex flex-col gap-1">
      <h1>{skill}</h1>
      <Progress value={progress} className="h-2 bg-muted" />
    </div>
  )
}

export default SkillLinealProgress