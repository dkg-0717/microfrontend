
const getRickCharacters = async () => {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const request = await fetch(url)
    const { results } = await request.json()
    return results
  } catch (err) {
    return err
  }

}

export {
  getRickCharacters
}