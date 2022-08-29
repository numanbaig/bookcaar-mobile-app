import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import biddingReducer from "./slices/biddingSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    bidding: biddingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
