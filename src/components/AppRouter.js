import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'
import { authRouter, publicRouter } from './router'

const AppRouter = () => {
  const {isAuth} = useSelector(state => state.auth)
  return (
        <Routes>
          {isAuth &&
            authRouter.map(route => <Route key={route.path} path={route.path} element={<route.component/>}exact />)
          }

          {publicRouter.map(route => <Route key={route.path} path={route.path} element={<route.component/>}exact />)}
          <Route path="*" element={<HomePage/>}/>
        </Routes>
  )
}

export default AppRouter