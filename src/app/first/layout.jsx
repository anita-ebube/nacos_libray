import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Sidebar from './Components/Sidebar/sidebar'

const layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
    
  )
}

export default layout
