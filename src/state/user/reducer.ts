import { createReducer } from '@reduxjs/toolkit'
import { updateUserDarkMode } from './actions'

const currentTimestamp = () => Date.now()

export interface UserState {
  userDarkMode: boolean | null
  matchesDarkMode: boolean
  timestamp: number
}

export const initialState: UserState = {
  userDarkMode: null,
  matchesDarkMode: false,
  timestamp: currentTimestamp(),
}

export default createReducer<UserState>(initialState, (builder) =>
  builder.addCase(updateUserDarkMode, (state, { payload }) => {
    state.userDarkMode = payload.userDarkMode
    state.timestamp = currentTimestamp()
  }),
)
