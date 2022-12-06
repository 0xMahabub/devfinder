import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserInfoState {
  userInfo: object
}

const initailState: UserInfoState = {
  userInfo: {},
}

const githubApi = createApi({
  reducerPath: 'userinfo',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({ query: (name) => `userinfo/${name}` }),
  }),
})

export const { useGetUserInfoQuery } = githubApi

async function fetchUserInfo(username: string) {
  await fetch('https://api.github.com/users/' + username)
    .then((r) => r.json())
    .then((d) => {
      return d
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err))
}

export const searchSlice = createSlice({
  initialState: initailState,
  name: 'userinfo',
  reducers: {
    decrement: (state) => {
      // state.count -= 1
    },
    fetchInfo: (state, action: PayloadAction<String>) => {
      state.userInfo = fetchUserInfo(String(action.payload))
    },
  },
})

// After action creators are generated for each reducer methods/functions
export const { decrement, fetchInfo } = searchSlice.actions

export default searchSlice.reducer
