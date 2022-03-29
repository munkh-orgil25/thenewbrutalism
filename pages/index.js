import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import ScrollContainer from 'react-indiana-drag-scroll'
import { gsap } from 'gsap'
import ProjItem from '../components/ProjItem'
import HoverTitle from '../components/HoverTitle'

import { server } from '../config'
import { bgMove, centeringFlip, scaleDown, scaleUp } from '../animations'

export default function Home({ buildings }) {
  const router = useRouter()
  const [title, setTitle] = useState('')

  let box = useRef(null)
  let parent = useRef(null)

  useEffect(() => {
    // Initial map placement
    const container = document.getElementsByClassName('scroll-container')[0]
    container.scrollTop = 570
    container.scrollLeft = 540
  }, [])

  const handleMouseMove = (e) => {
    bgMove(e, box)
  }

  const mouseEnterProj = (e) => {
    const id = e.currentTarget.dataset.id
    const elem = e.target

    if (id) {
      const building = buildings.find((build) => build.id === id)
      setTitle(building.name)
    } else {
      setTitle('')
    }
    //hover animation enter
    scaleUp(elem)
  }

  const mouseLeaveProj = (e) => {
    const elem = e.target
    //hover animation exit
    scaleDown(elem)
  }

  const centeringSelection = (e) => {
    const elem = e.currentTarget
    const image = e.target

    scaleDown(image)

    centeringFlip(elem, parent, router)
  }

  return (
    <main>
      <div ref={(el) => (parent = el)} className='centered'></div>
      <ScrollContainer className='scroll-container'>
        <div ref={(el) => (box = el)} className='box' onMouseMove={handleMouseMove}>
          {buildings.map((building) => (
            <ProjItem
              key={building.id}
              building={building}
              mouseLeave={mouseLeaveProj}
              mouseEnter={mouseEnterProj}
              onClick={centeringSelection}
            />
          ))}
        </div>
      </ScrollContainer>
      <HoverTitle title={title} />
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/buildings`)
  const buildings = await res.json()

  return {
    props: {
      buildings,
    },
  }
}
