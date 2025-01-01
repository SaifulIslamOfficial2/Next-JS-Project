

function layout({children ,footer , header,main}) {
  return (
    <div className=" max-w-screen-md mx-auto">
        {header}
        {main}
        {footer}
        {children}
        </div>
  )
}

export default layout