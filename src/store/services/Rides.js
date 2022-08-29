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
  let bidding = []
  try {
    let request = []
    const db = getFirestore()
    const state = getState()

    const q = query(
      collection(db, "car-request"),
      where("completed", "==", false),
      where("hiredRiderId", "==", state.user.user)
    )

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        bidding.push({ id: doc.id, ...doc.data() })
      })
      dispatch(setActiveRides(bidding))
    })
  } catch (err) {
    console.log("ee", e)
  }
}

export const getRidesHistory = () => async (dispatch, getState) => {
  try {
    let history = []
    const db = getFirestore()
    const state = getState()
    console.log("here")
    const q = query(
      collection(db, "car-request"),
      where("completed", "==", true),
      where("hiredRiderId", "==", state.user.user)
    )

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("doc", doc.id)
        history.push({ id: doc.id, ...doc.data() })
      })
      console.log("hh", history)
      dispatch(setRidesHistory(history))
    })
  } catch (err) {
    console.log("ee", e)
  }
}
