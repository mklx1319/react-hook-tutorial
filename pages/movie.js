import React, { useContext, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Link from 'next/link'

import { StoreContext, dispatcher } from '../component/store'

const Movie = ({ shows }) => {
  const { state: store, dispatch } = useContext(StoreContext)
  useEffect(() => {
    dispatch(dispatcher.setCountView)
  }, [])
  return (
    <div>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/movie">
        <a>Movie</a>
      </Link>
      <hr />
      <p>counter view: {store.countView}</p>
      <p />
      {shows.map(({ show }) => (
        <div
          key={show.id}
          style={{
            border: '1px solid #000000',
            width: '300px',
            height: '300px',
          }}
        >
          <p>{show.name}</p>
          <p>{show.type}</p>
          <p>{show.language}</p>
          <ul>
            {show.genres.map((item) => (
              <li key={show.id + item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

Movie.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  return {
    shows: data,
  }
}

export default Movie
