import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link>
            <img src= "/assets/logo/logo1.jpeg" alt="logo" cl/>
            </Link>
            <Link to='/' className='link'>
            <h2>BiteQ</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' style={{ width: '500px'}}/>
        </div>
        <div className="userAuth">
            Login / SignUp
        </div>
   </section>
  )
}

export default TopBar