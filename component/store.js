import React, { createContext, useReducer, useEffect } from 'react'

const initState = { countView: 0 }

const reducer = (state, action) => {
  console.log(state)
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

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)
  // useEffect(() => {
  //   window.localStorage.setItem('store', JSON.stringify(state))
  // }, [state])
  return <StoreContext.Provider value={{ state, dispatch }}>{props.children}</StoreContext.Provider>
}

export { dispatcher, StoreProvider, StoreContext }
