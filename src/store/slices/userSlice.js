import { createSlice } from "@reduxjs/toolkit"

import { createUserWithEmail, signOutUser } from "../services/Auth"

const initialState = {
  user: null,
  isLoading: false,
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
    })
  },
})

export const { userAdded, userRemoved, toogleAuthLoading } = userSlice.actions
export const currentUser = (state) => state.user.user
export const signUpState = (state) => state.user.isLoading

export default userSlice.reducer
