import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import css from './newDashboard.module.scss'
import axios from 'axios'
import { useCookies } from 'react-cookie'

export default function NewDashboard() {

  const [cookies,setCookie ,removeCookie] = useCookies(['token'])
  const Navigate = useNavigate()
  const token = cookies.token

  useEffect(() => {
    document.title = 'Dashboard - EasyRent'
  }, [])

  const Logout = async () => {
    try {
       await axios.delete('http://localhost:3000/user/logout')
       removeCookie('token')
       Navigate('/')
    } catch (error:any) {
      console.log(error.msg,{
        message: '304 : Bad Request'
      });
      
    }
  }
  return (
    <div className={css.container}>
      <div></div>
      <aside>
        <div>
          <div className={css.logo_container}>
            <Link to="" className={`background_def ${css.logo}`}></Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="overview">Overview</Link>
              </li>
              <li>
                <Link to="cars">Cars</Link>
              </li>
              <li>
                <Link to="appointments">Appointments</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={css.profil}>
          <div></div>
          <p>nama user</p>
          <button onClick={Logout}>Log Out</button>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
