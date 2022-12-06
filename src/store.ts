import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'

import counterReducer from './components/counter/counter.slice'
import searchUserReducer from './components/search/search.slice'

export const store = configureStore({
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
  reducer: {
    counter: counterReducer,
    userinfo: searchUserReducer,
  },
})

//
export type RootState = ReturnType<typeof store.getState>
//
export type AppDispatch = typeof store.dispatch

// setupListeners(store.dispatch) // rtk-query listen
