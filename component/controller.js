import { useState, createContext } from 'react'

const ProfileContext = createContext()
const ProfileProvider = ProfileContext.Provider
const ProfileConsumer = ProfileContext.Consumer

const useStore = () => {
  const store = {
    name: 'Me',
    age: 999,
    sex: 'Male',
    height: 200,
    weight: 100,
  }

  const [state, setState] = useState(store)

  const changeSex = () => {
    setState({
      ...state,
      sex: state.sex === 'Male' ? 'Female' : 'Male',
    })
  }
  const randomWeightHeight = (key) => {
    const min = key === 'height' ? 200 : 100
    const max = key === 'height' ? 100 : 20
    setState({
      ...state,
      [key]: Math.floor(Math.random() * (max - min) + min),
    })
  }

  return { state, changeSex, randomWeightHeight }
}

export { useStore, ProfileProvider, ProfileConsumer }
