import { useEffect } from 'react'

export const checkClass = (): void => {
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 53) {
        document.querySelector('header').classList.remove('headerColor')
        document.querySelector('header').classList.remove('initialPosition')
        document.querySelector('header').classList.add('headerColorScroll')
      } else {
        document.querySelector('header').classList.remove('headerColorScroll')
        document.querySelector('header').classList.add('headerColor')
        document.querySelector('header').classList.add('initialPosition')
      }
    }
  }, [])
}
