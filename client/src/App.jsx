import React from 'react'
import Navigation from './Components/Navigation'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'

const App = () => {
  return (
    <>
      <main>
        <Navigation />
        <Content/>
        <Sidebar/>
      </main>
    </>
  )
}

export default App
