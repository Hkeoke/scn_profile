import FuzzyText from '@/components/core/fuzzy-text'
import React from 'react'

const NotFound = () => {
  return (
    <section className='w-full h-screen flex flex-row items-center justify-center'>
      <FuzzyText>
        404
      </FuzzyText>
    </section>
  )
}

export default NotFound