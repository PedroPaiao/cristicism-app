import { useEffect } from 'react'

export const checkClass = (): void => {
  useEffect(() => {
    window.onscroll = () => {
      document.querySelector('header').classList.remove('headerColorScroll')
      document.querySelector('header').classList.add('headerColor')

      if (window.scrollY >= 53) {
        return Dale()
      }
    }
  }, [])

  function Dale() {
    document.querySelector('header').classList.remove('headerColor')
    document.querySelector('header').classList.add('headerColorScroll')
  }
}
