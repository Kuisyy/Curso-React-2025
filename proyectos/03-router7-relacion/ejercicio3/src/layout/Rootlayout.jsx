import { Outlet } from "react-router-dom"

const Rootlayout = () => {
  return (
    <div className="flex items-center">
      <Outlet/>
    </div>
  )
}

export default Rootlayout