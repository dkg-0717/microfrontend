
const getRickCharacters = async () => {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const request = await fetch(url)
    const { results } = await request.json()
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(results)
      }, 1000)
    })
  } catch (err) {
    return err
  }

}

export {
  getRickCharacters
}