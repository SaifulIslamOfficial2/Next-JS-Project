import { blogList } from '@/app/data/data'
import Link from 'next/link';
import React from 'react'

function page({params}) {

    let blog = blogList.find((blog)=> blog.id === parseInt(params.id));

    if(!blog){
        throw new Error("blog not found")
    };

  return (
    <div>
        <h2 className='font-semibold'>{blog.title}</h2>
        <p className='mb-3'>{blog.body}</p>

        <Link
        href="/blog"
        className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Go Back
      </Link>
    </div>
  )
}

export default page