import React, { useEffect } from 'react'
import {useCookies} from 'react-cookie';
import {Navigate} from 'react-router-dom';

import NavBar from '../../../components/navbar/navbar'
import Main from './main/main'

const login = () => {
  const [cookies] = useCookies(['token'])
  const token = cookies.token
  const Auth = token ? true : false

  if (Auth) {
    return <Navigate to='/admin' replace={true}/>
  }

  useEffect(() => {
    document.title = 'Login - EasyRent'
  }, [])
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}

export default login
