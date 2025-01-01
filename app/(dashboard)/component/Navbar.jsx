import Link from "next/link"


function Navbar() {
  return (
    <div>
        <ul className=" flex gap-2">
            <li className="bg-slate-500 text-white py-1 px-3"><Link href="/blog">blog</Link></li>
            <li className="bg-slate-500 text-white py-1 px-3"><Link href="/category">category</Link></li>
        </ul>
    </div>
  )
}

export default Navbar