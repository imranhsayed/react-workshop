import React from 'react';

const Movie = ({movie}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
      <div className="mb-8 text-white">
        <figure className="overflow-hidden mb-4">
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path ?? ''}`} alt={movie.name}/>
        </figure>
        <div className="flex justify-between">
          <p>{movie?.first_air_date ?? ''}</p>
          <p className="text-yellow-300 font-bold">{movie?.vote_average ?? ''}</p>
        </div>
        <h2>{movie?.name ?? ''}</h2>
        <p>{movie?.overview ?? ''}</p>
      </div>
    </div>
  )
}

export default Movie
