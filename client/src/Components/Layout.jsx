import Header from './Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30">
        <Header/>
        <div className="grid grid-cols-3 h-full">
        {children}       
        </div>
      </div>
    </div>
  )
}

export default Layout
