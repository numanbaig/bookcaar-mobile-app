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
import { setActiveRides, setRidesHistory } from "../slices/ridesSlice"
export const getActiveRides = () => async (dispatch, getState) => {
  try {
    console.log("ssss")
    const db = getFirestore()
    const state = getState()

    const q = query(
      collection(db, "car-request"),
      where("completed", "==", false),
      where("hiredRiderId", "==", state.user.user)
    )

    onSnapshot(q, (querySnapshot) => {
      let bidding = []
      querySnapshot.forEach((doc) => {
        bidding.push({ id: doc.id, ...doc.data() })
      })
      console.log("ss")
      dispatch(setActiveRides(bidding))
    })
  } catch (err) {
    console.log("ee", e)
  }
}

export const getRidesHistory = () => async (dispatch, getState) => {
  try {
    const db = getFirestore()
    const state = getState()
    console.log("here")
    const q = query(
      collection(db, "car-request"),
      where("completed", "==", true),
      where("hiredRiderId", "==", state.user.user)
    )

    onSnapshot(q, (querySnapshot) => {
      let history = []
      querySnapshot.forEach((doc) => {
        history.push({ id: doc.id, ...doc.data() })
      })
      dispatch(setRidesHistory(history))
    })
  } catch (err) {
    console.log("ee", e)
  }
}
