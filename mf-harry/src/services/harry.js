
const getHarryCharacters = async () => {

  const url = 'https://hp-api.onrender.com/api/characters/students'

  try {
    const request = await fetch(url)
    const data = await request.json()
    return data
  } catch (err) {
    return err
  }

}

export {
  getHarryCharacters
}