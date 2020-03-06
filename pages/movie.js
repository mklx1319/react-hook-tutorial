import React, { useContext, useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Link from 'next/link'

import { StoreContext, dispatcher } from '../component/store'

const Table = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`

const Movie = () => {
  const { state: store, dispatch } = useContext(StoreContext)
  const [state, setState] = useState({ shows: [] })
  useEffect(() => {
    dispatch(dispatcher.setCountView)

    const fetchData = async () => {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
      const data = await res.json()
      setState({
        ...state,
        shows: data,
      })
    }
    fetchData()
  }, [])
  const { shows } = state
  return (
    <div>
      <Link href="/">
        <a>Index</a>
      </Link>
      /
      <Link href="/movie">
        <a>Movie</a>
      </Link>
      <hr />
      <p>counter click: {store.countView}</p>
      {shows.map(({ show }) => (
        <Table
          border="1"
          key={show.id}
          style={{
            width: '600px',
          }}
        >
          <tbody>
            <tr>
              <td>Pic : </td>
              <td>
                <img src={show.image.medium} alt="" width="100" />
              </td>
            </tr>
            <tr>
              <td>Name : </td>
              <td>{show.name}</td>
            </tr>
            <tr>
              <td>Type : </td>
              <td>{show.type}</td>
            </tr>
            <tr>
              <td>Language : </td>
              <td>{show.language}</td>
            </tr>
            <tr>
              <td>Genres : </td>
              <td>
                <ul>
                  {show.genres.map((item) => (
                    <li key={show.id + item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Status : </td>
              <td>{show.status}</td>
            </tr>
            <tr>
              <td>Summary : </td>
              <td>{show.summary}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  )
}

export default Movie
