import Link from 'next/link'
import React from 'react'

export const Tools = ({tools,route}) => {
  return (
    <section className="py-4 md:py-10 px-6 md:px-40">
        <h2 className="text-xl md:text-2xl font-semibold text-left mb-10">Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-20">
          {tools.map((tool, index) => (
            <div className='flex flex-col md:gap-2'>
            <div key={index} className="relative h-40 md:h-52 bg-gray-300 bg-cover bg-center rounded-lg flex items-end p-6" style={{ backgroundImage: `url(${tool.src})` }}/>
                <Link href={`/collections/${route}/saas-tools/${tool.slug}`} className="text-md mt-4">{tool.name}</Link>
            </div>
          ))}
        </div>
      </section>
  )
}
