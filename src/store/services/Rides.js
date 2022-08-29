import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  setDoc,
  doc,
  updateDoc,
  query,
  getDoc,
  where,
} from "firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setActiveRides } from "../slices/ridesSlice"
export const getActiveRides = () => async (dispatch, getState) => {
  let bidding = []
  try {
    let request = []
    const db = getFirestore()
    const state = getState()

    console.log("user", state.user.user)
    const q = query(
      collection(db, "car-request"),
      where("completed", "==", false),
      where("hiredRiderId", "==", state.user.user)
    )

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("ss", doc.id)
        bidding.push({ id: doc.id, ...doc.data() })
      })
      dispatch(setActiveRides(bidding))
    })
  } catch (err) {
    console.log("ee", e)
  }
}
