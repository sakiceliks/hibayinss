import React from 'react'
import LottieAnimation from '../LootieAnimation'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
      <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
        <LottieAnimation />
      </div>

      <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left'>
          Endüstriyel Zemin Çözümleri
        </h2>
        <p className='font-medium capitalize mt-4 text-base'>
          
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection
