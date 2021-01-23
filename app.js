// const DOMAIN = 'http://www.omdbapi.com/';
// const API_KEY = 'd499ed39'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

//('http://www.omdbapi.com/?t=jaws&apikey=d499ed39') returns jaws


const getMovies = async (titleQuery) => {
  try {
    // let response = await axios.get(BASE_URL)
    let response = await axios.get(`http://www.omdbapi.com/?s=${titleQuery}&apikey=d499ed39`)
    // console.log(response.data);
    displayResults(response.data)
  } catch (error) {
    console.log(error);
  }
}

const displayResults = (moviesObj) => {
  // console.log(moviesObj)
  const movieList = document.querySelector('.movie-list')

  if (movieList.hasChildNodes()) {
    while (movieList.hasChildNodes()) {
      movieList.removeChild(movieList.lastChild)
    }
  }
  moviesObj.Search.forEach(obj => {
    const { Title, Poster, Year } = obj
    // console.log(Title, Poster, Year)
    const newBox = document.createElement('div')
    movieList.append(newBox)

    const poster = document.createElement('img')
    poster.src = Poster
    poster.alt = `${Title}-movieposter`
    newBox.append(poster)

    let newP = document.createElement('p')
    let textContent = document.createTextNode(`${Title} \(${Year}\)`)
    newBox.append(newP)
    newP.append(textContent)

  })
}
// Display a list of movies returned by the search api call. At least the movie's title and poster should be visible. Feel free to include movie year as well.


const getTitleQuery = (e) => {
  e.preventDefault();
  let titleQuery = document.querySelector('#select-movie').value
  getMovies(titleQuery)
}

const form = document.querySelector('form')
form.addEventListener('submit', getTitleQuery)

