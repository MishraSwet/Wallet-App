import Header from './Header'
import React,{children} from 'react'
import Navigation from './Navigation'

const Layout = ({children}) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30">
        <Header/>
        <div className="grid grid-cols-3 h-full">
          <Navigation/>
        {children}       
        </div>
      </div>
    </div>
  )
}

export default Layout
