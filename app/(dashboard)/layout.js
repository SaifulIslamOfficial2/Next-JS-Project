import Navbar from "./component/Navbar";


export default function Dashboardlayout({children}) {
  return (
    <div className="flex max-w-screen-md mx-auto gap-2 mt-4 ">
        <div className=" w-3/12 bg-lime-700"></div>
        <div  className=" w-9/12 bg-teal-100">
            <div className="h-12 bg-red-700">
                <Navbar/>
            </div>
            <div className="py-12">{children}</div>
            <div className="h-12 bg-slate-500"></div>
        </div>
    </div>
  )
}

