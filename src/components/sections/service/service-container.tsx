
import React from 'react'
import { SERVICES } from '@/constants/services'
import { ServiceIcon } from './service-item'

const ServiceContainer = () => {

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-5 gap-y-4'>
      {SERVICES?.map(service => <ServiceIcon key={service?.title} service={service} />)}
    </section>
  )
}

export default ServiceContainer



