import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import { useEffect } from "react"

function Dashboard() {

    const Navigate = useNavigate();
  
  useEffect(() => {
    
    const usuario = localStorage.getItem("usuario");
    if( !usuario ) {
      Navigate ("/");
      
    }

  }, [] )
  return (
    <>
        <Outlet />
    </>
  )
}

export default Dashboard