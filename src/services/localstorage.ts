const getLocalStorage = () => {
  if (typeof localStorage === 'undefined' || localStorage === null) {
    return null
  }
  const result = JSON.parse(localStorage.getItem('user'))
  // console.log('type:  ', typeof result)
  // console.log('result:  ', result)
  return result
}

export default getLocalStorage
