import React, { Component } from 'react'

import Link from 'next/link'

import ButtonRow from '../component/ButtonRow'
import ProfileFrame from '../component/ProfileFrame'

class Legacy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Me',
      age: 999,
      sex: 'Male',
      height: 200,
      weight: 100,
    }
  }

  changeSex = () => {
    this.setState({
      sex: this.state.sex === 'Male' ? 'Female' : 'Male',
    })
  }

  randomWeightHeight = (key) => {
    const min = key === 'height' ? 200 : 100
    const max = key === 'height' ? 100 : 20
    this.setState({
      [key]: Math.floor(Math.random() * (max - min) + min),
    })
  }

  render() {
    return (
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/movie">
          <a>Movie</a>
        </Link>
        <ButtonRow changeSex={this.changeSex} randomWeightHeight={this.randomWeightHeight} />
        <ProfileFrame state={this.state} />
      </div>
    )
  }
}

export default Legacy
