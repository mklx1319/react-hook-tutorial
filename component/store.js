import React, { createContext, useReducer, useEffect } from 'react'

const initState = { countView: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'ENTRANCE':
      return { countView: state.countView + 1 }
    default:
      throw new Error()
  }
}

const dispatcher = {
  setCountView: {
    type: 'ENTRANCE',
  },
}

const StoreContext = createContext()
const StoreConsumer = StoreContext.Consumer

const StoreProvider = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(() => {
    window.localStorage.setItem('store', JSON.stringify(state))
  }, [state])
  useEffect(() => {
    dispatch(dispatcher.setCountView)
  }, [])
  return <StoreContext.Provider value={{ state, dispatch }}>{props.children}</StoreContext.Provider>
}

export { dispatcher, StoreProvider, StoreConsumer }
