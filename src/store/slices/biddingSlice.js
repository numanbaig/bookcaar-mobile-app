import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  bidding: [],
}
const userSlice = createSlice({
  name: "bidding",
  initialState,
  reducers: {
    setBiddingList(state, action) {
      state.bidding = action.payload
    },
  },
})

export const { setBiddingList } = userSlice.actions
export const bidding = (state) => state.bidding.bidding

export default userSlice.reducer
