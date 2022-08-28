import { createSlice } from "@reduxjs/toolkit"

import { createUserWithEmail } from "../services/Auth"

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
  },
  extraReducers: (builder) => {
    builder.addCase(createUserWithEmail.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(createUserWithEmail.fulfilled, (state, action) => {
      state.isLoading = false
    })
  },
})

export const { userAdded, userRemoved } = userSlice.actions
export const currentUser = (state) => state.user.user
export const signUpState = (state) => state.user.isLoading

export default userSlice.reducer
