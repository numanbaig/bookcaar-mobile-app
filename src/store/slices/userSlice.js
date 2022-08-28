import { createSlice } from "@reduxjs/toolkit"

import { createUserWithEmail, loginWithEmail } from "../services/Auth"

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
    builder
      .addCase(createUserWithEmail.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(createUserWithEmail.fulfilled, (state, action) => {
        console.log(action.payload, "add dded")
        state.isLoading = true
      })
  },
})

export const { userAdded, userRemoved } = userSlice.actions

export default userSlice.reducer
