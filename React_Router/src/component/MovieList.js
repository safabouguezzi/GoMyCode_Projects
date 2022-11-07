import React from 'react'
import MovieCard from './MovieCard'
import "./style.css"


const MovieList = ({Movies}) => {
  // console.log('rendering MovieList', Movies)

  return (

    Movies.map( (el, key) => <MovieCard key={key} movie= {el} />) 
  
  )
}

export default MovieList