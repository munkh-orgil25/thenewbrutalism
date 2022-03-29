import Link from 'next/link'
import { useState } from 'react'
import { gsap } from 'gsap'

const Nav = ({ toggleInfo, toggleIndex }) => {
  return (
    <>
      <div className='navigation'>
        <div className='logo'>
          <h2>
            <Link href='/'>The New Brutalism</Link>
          </h2>
        </div>
        <div onClick={toggleInfo} className='about'>
          <h2>Info</h2>
        </div>
        <div onClick={toggleIndex} className='index'>
          <h2>Index</h2>
        </div>
      </div>
    </>
  )
}

export default Nav
