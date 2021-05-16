import './style.scss'
import gsap from 'gsap/all'

// ========== 01 : Obtenir la position du curseur ==========
let mouse = {
  x: 0,
  y: 0
}
let isMoving = false

let mouseMove = (ev) => {
  isMoving = true
  mouse.x = (ev.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(ev.clientY / window.innerHeight) * 2 + 1
}

window.addEventListener('mousemove', (event) => {
  mouseMove(event)
})

// ========== 02 : Faire bouger mes éléments ==========
const elementsList = document.querySelectorAll('svg > path')
const svgInfos = document.querySelector('svg').getBoundingClientRect()

const tick = () => {
  if (isMoving) {
    elementsList.forEach((el, index) => {
      gsap
      .to(el, {
        x: (svgInfos.width * mouse.x) * (index) / 100,
        y: (svgInfos.width * mouse.y) * (index) / 100,
      })
      .play()
    })
    isMoving = false
  }
  window.requestAnimationFrame(tick)
}

tick()
