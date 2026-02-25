import React from 'react'
import Hero from './Hero'

function Header() {
  return (
    <div>
        <nav>
            <div className='logo'>
                <img src='/image/brand_logo.png' alt='logoimg'/>
            </div>
            <ul>
                <li href="#"> Menu</li>
                <li href="#"> Location</li>
                <li href="#"> About</li>
                <li href="#"> Contact</li>
            </ul>

            <button>Login</button>
        </nav>
        <Hero/>
    </div>
  )
}

export default Header