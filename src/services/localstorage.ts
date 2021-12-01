const getLocalStorage = () => {
  if (typeof localStorage === 'undefined' || localStorage === null) {
    return null
  }
  const result = JSON.parse(localStorage.getItem('user'))
  return result
}

export default getLocalStorage
