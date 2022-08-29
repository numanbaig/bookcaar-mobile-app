import { getFirestore, collection, getDocs } from "firebase/firestore"
import { setBiddingList } from "../slices/biddingSlice"
export const getBidding = () => async (dispatch) => {
  let bidding = []
  const db = getFirestore()
  const querySnapshot = await getDocs(collection(db, "car-request"))
  querySnapshot.forEach((doc) => {
    bidding.push({ id: doc.id, ...doc.data() })
  })
  dispatch(setBiddingList(bidding))
}

export const getDriverRideRequests = () => async (dispatch, getState) => {
  let bidding = []
  const state = getState()
  const db = getFirestore()
  const querySnapshot = await getDocs(collection(db, "car-request"))
  querySnapshot.forEach((doc) => {
    bidding.push({ id: doc.id, ...doc.data() })
  })
  dispatch(setBiddingList(bidding))
}
