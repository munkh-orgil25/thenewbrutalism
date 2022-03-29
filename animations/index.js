import gsap from 'gsap'
import { Flip } from 'gsap/dist/Flip'

gsap.registerPlugin(Flip)

export const bgMove = (e, container) => {
  const windowWidth = window.innerWidth * 0.01
  const windowHeight = window.innerHeight * 0.01
  const mouseX = e.clientX / windowWidth
  const mouseY = e.clientY / windowHeight
  container.style.transform = `translate(-${mouseX}px, -${mouseY}px)`
}

export const centeringFlip = (elem, parentContainer, router) => {
  const flipState = Flip.getState(elem)

  const id = elem.dataset.id

  parentContainer.appendChild(elem)

  gsap.to('.centered', { css: { zIndex: 100 }, duration: 0 })
  gsap.to('.scroll-container', { css: { opacity: 0 }, delay: 0.5 })
  elem.classList.add('focused-container')
  Flip.from(flipState, { duration: 1, ease: 'power3.inOut', onComplete: () => router.push(`/projects/${id}`) })
}

export const scaleUp = (elem) => {
  gsap.to(elem, { scale: 1.1, duration: 0.3, ease: 'power3.out' })
}

export const scaleDown = (elem) => {
  gsap.to(elem, { scale: 1, duration: 0.3, ease: 'power3.out' })
}
