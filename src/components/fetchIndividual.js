export function fetchIndividual(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })
      .catch(error => console.log({error}))
}