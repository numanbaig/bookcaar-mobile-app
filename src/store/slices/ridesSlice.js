import { createSlice } from "@reduxjs/toolkit"

import { getActiveRides } from "../services/Rides"

const initialState = {
  rides: [],
  activeRidesLoading: true,
}
const ridesSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    setActiveRides(state, action) {
      state.rides = action.payload
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getActiveRides.pending, (state, action) => {
    //   state.activeRidesLoading = true
    // })
    // builder.addCase(getActiveRides.fulfilled, (state, action) => {
    //   state.activeRidesLoading = false
    // })
  },
})

export const { setActiveRides } = ridesSlice.actions

export default ridesSlice.reducer
