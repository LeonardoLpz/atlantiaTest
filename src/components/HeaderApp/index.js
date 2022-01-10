import React from 'react'
import './style.css'

const HeaderApp = (props) => {
const logo = props.logo
    return (
        <>
         <div className='header-app'>
             <img src={logo}/>
         </div>
        </>
    )
}

export default HeaderApp;