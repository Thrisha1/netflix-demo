import React,{ useState } from 'react'
import MovieRow from './MovieRow'

const DisplayPage = () => {

  return (
    <div className="p-10">
      <MovieRow category="Trending" />
      <MovieRow category="Horror" />
      <MovieRow category="Action" />
      <MovieRow category="Romance" />
    </div>
  )
}

export default DisplayPage