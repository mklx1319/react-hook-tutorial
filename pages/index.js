import React, { Component } from 'react'

import Link from 'next/link'

import { useStore, ProfileProvider } from '../component/controller'
import { StoreConsumer } from '../component/store'
import ButtonRow from '../component/ButtonRow'
import ProfileFrame from '../component/ProfileFrame'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Me',
      age: 999,
      sex: 'Male',
      height: 200,
      weight: 100,
    }
    this.changeSex = this.changeSex.bind(this)
    this.randomWeightHeight = this.randomWeightHeight.bind(this)
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

export default index
