import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  bidding: [],
  driverBids: [],
  cars: [],
  carAdded: false,
}
const userSlice = createSlice({
  name: "bidding",
  initialState,
  reducers: {
    setBiddingList(state, action) {
      state.bidding = action.payload
    },
    currentDriverBids(state, action) {
      state.driverBids = action.payload
    },
    driverCars(state, action) {
      state.cars = action.payload
    },
    carsAdded(state, action) {
      state.carAdded = true
    },
  },
})

export const { setBiddingList, currentDriverBids, driverCars, carsAdded } =
  userSlice.actions
export const bidding = (state) => state.bidding.bidding
export const driverBids = (state) => state.bidding.driverBids
export const cars = (state) => state.bidding.cars
export const driverCarAdded = (state) => state.bidding.carsAdded
export default userSlice.reducer
