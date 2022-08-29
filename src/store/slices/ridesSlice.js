import { createSlice } from "@reduxjs/toolkit"

import { getActiveRides } from "../services/Rides"

const initialState = {
  rides: [],
  activeRidesLoading: true,
  ridesHistory: [],
}
const ridesSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    setActiveRides(state, action) {
      state.rides = action.payload
    },
    setRidesHistory(state, action) {
      state.ridesHistory = action.payload
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

export const { setActiveRides, setRidesHistory } = ridesSlice.actions

export default ridesSlice.reducer
