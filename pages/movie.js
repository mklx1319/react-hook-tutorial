import React, { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Link from 'next/link'

import { StoreConsumer, dispatcher } from '../component/store'

const Movie = ({ shows }) => {
  useEffect(() => {
    dispatch(dispatcher.setCountView)
  }, [])
  return (
    <StoreConsumer>
      {({ state, dispatch }) => (
        <div>
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/movie">
            <a>Movie</a>
          </Link>
          <p>Entrance Count: {state.countView}</p>

          {shows.map(({ show }) => (
            <div
              key={show.id}
              style={{ border: '1px solid #000000', width: '300px', display: 'inline-block' }}
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
      )}
    </StoreConsumer>
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
