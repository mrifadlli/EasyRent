import React,{useEffect} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import  { useCookies } from 'react-cookie'


const ProtectedRoute = () => {

    const [cookies] = useCookies(['token'])
    const Navigate = useNavigate()

    const token = cookies.token
    const Auth = token ? true : false

    useEffect(() => {
        if (!Auth) Navigate('/login')
    },[])

    

  return (
    <>
        <Outlet />
    </>
  )
}

export default ProtectedRoute