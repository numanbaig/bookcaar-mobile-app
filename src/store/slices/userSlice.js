import { createSlice } from "@reduxjs/toolkit"

import { createUserWithEmail, signOutUser } from "../services/Auth"

const initialState = {
  user: null,
  isLoading: false,
  appLoading: true,
  currentUser: null,
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.user = action.payload
    },
    userRemoved(state, action) {
      state.user = null
    },
    toogleAuthLoading(state, action) {
      state.isLoading = !state.isLoading
    },
    toggleAppLoading(state, action) {
      state.appLoading = !state.appLoading
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    },
    removeCurrentUser(state, action) {
      state.currentUser = null
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(createUserWithEmail.pending, (state, action) => {
    //   state.isLoading = true
    // })
    // builder.addCase(createUserWithEmail.fulfilled, (state, action) => {
    //   console.log("action", action.payload)
    //   state.isLoading = false
    // })
    builder.addCase(signOutUser.fulfilled, (state, action) => {
      state.user = null
      state.currentUser = null
    })
  },
})

export const {
  userAdded,
  userRemoved,
  toogleAuthLoading,
  toggleAppLoading,
  setCurrentUser,
  removeCurrentUser,
} = userSlice.actions
export const currentUser = (state) => state.user.user
export const signUpState = (state) => state.user.isLoading
export const appLoading = (state) => state.user.appLoading
export default userSlice.reducer
