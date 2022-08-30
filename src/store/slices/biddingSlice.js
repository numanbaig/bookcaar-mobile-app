import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  bidding: [],
  driverBids: [],
  cars: [],
  carAdded: false,
  rideRequest: [],
}
const userSlice = createSlice({
  name: "bidding",
  initialState,
  reducers: {
    setBiddingList(state, action) {
      const bidding = action.payload
      state.bidding = bidding
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
    driverBidsList(state, action) {
      state.rideRequest = action.payload
    },
  },
})

export const {
  setBiddingList,
  currentDriverBids,
  driverCars,
  carsAdded,
  driverBidsList,
} = userSlice.actions
export const bidding = (state) => state.bidding.bidding
export const driverBids = (state) => state.bidding.driverBids
export const cars = (state) => state.bidding.cars
export const driverCarAdded = (state) => state.bidding.carAdded
export default userSlice.reducer
