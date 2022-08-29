import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import biddingReducer from "./slices/biddingSlice"
import ridesReducer from "./slices/ridesSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    bidding: biddingReducer,
    rides: ridesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
