import React from 'react'
import './header.css'

interface headerProps {
    children: React.ReactNode
}

const Header: React.FC<headerProps> = ({children}) => {
  return (

    <div className="header-area">
      <h1 className="header">{children}</h1>
      </div>
  )
}

export default Header