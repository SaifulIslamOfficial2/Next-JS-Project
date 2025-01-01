import { blogList } from '@/app/data/data'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div>
      <ul>
        {blogList.map((blog) => (
          <li className="py-2 border-b-2" key={blog.id}>
            {blog.title}
            <br />
            <Link
              href={`/blog/${blog.id}`} 
              className="inline-block py-1 px-3 bg-blue-600 text-white"
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
