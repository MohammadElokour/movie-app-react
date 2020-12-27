import React from 'react';


const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, i) => (
          <div className="m-3" key={i}>
            <img src={movie.Poster} alt={movie.title} width="300" height="465"></img>
          </div> 
        ))}
    </>
  )
}



export default MovieList;