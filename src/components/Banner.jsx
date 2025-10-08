
import React from 'react'

export default function Banner() {
  return (
    <section className="app-container py-16">
        <div className='grid grid-cols-1 sm:grid-cols-2 h-full'>
            <div className='mb-16'>
                <img src="/banner2.avif" alt="" className='h-80 '/>
            </div>
            <div className=''>
                 <img className='h-80 ' src="/banner1.avif" alt="" />
            </div>
            
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div><img src="/ab1.jpg" alt="" className='h-80 '/></div>
          <div><img src="/area-1.jpg" alt="" className='h-80 '/></div>
          <div><img src="/area-2.jpg" alt="" className='h-80 '/></div>
        </div>
    </section>
  )
}
