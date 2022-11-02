import React from 'react'
import MovieCard from './MovieCard'
import "./style.css"


const MovieList = ({Movies}) => {
  // console.log('rendering MovieList', Movies)

  return (

    Movies.map( el => <MovieCard  movie= {el} />) 
  
  )
}

export default MovieList