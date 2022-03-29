import { useState } from 'react'
import { gsap } from 'gsap'

import Nav from './Nav'
import Info from './Info'
import Index from './Index'

const Layout = ({ children }) => {
  const [infoOpen, setInfoOpen] = useState(false)
  const [indexOpen, setIndexOpen] = useState(false)

  const toggleInfo = () => {
    setInfoOpen(!infoOpen)

    if (infoOpen === false) {
      gsap.to('.about-wrapper', { x: 0, duration: 0.5, ease: 'expo.Out' })
    } else {
      gsap.to('.about-wrapper', { x: '100%', duration: 0.5, ease: 'expo.Out' })
    }
  }

  const toggleIndex = () => {
    setIndexOpen(!indexOpen)
    if (indexOpen === false) {
      gsap.to('.index-wrapper', { x: 0, duration: 0.5, ease: 'expo.Out' })
    } else {
      gsap.to('.index-wrapper', { x: '-100%', duration: 0.5, ease: 'expo.Out' })
    }
  }
  return (
    <div className='main'>
      <Nav toggleInfo={toggleInfo} toggleIndex={toggleIndex} />
      <Info toggleInfo={toggleInfo} />
      <Index toggleIndex={toggleIndex} />
      {children}
    </div>
  )
}

export default Layout
