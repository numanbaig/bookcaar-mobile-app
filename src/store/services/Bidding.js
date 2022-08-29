import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore"
import {
  setBiddingList,
  currentDriverBids,
  carsAdded,
  driverCars,
} from "../slices/biddingSlice"
import { uploadImageAndDownloadUrl } from "../helpers/uploadImage"
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
  dispatch(currentDriverBids(bidding))
}

export const addCarDetials = (values) => async (dispatch, getState) => {
  try {
    const state = getState()
    console.log("state.user.user", state.user.user)
    const db = getFirestore()
    let carImages = ""
    if (values.carImages) {
      carImages = await uploadImageAndDownloadUrl(
        values.carImages,
        values.numberPlate,
        "numberplate.jpeg"
      )
    }

    await addDoc(collection(db, "drivers", state.user.user, "cars"), {
      numberPlate: values.numberPlate,
      carImages: carImages,
      numberPlate: values.numberPlate,
      ac: values.ac,
      seats: values.seats,
      baggage: values.baggage,
      carType: values.carType,
    })

    dispatch(carsAdded())
  } catch (err) {
  } finally {
  }
}
export const getCarDetails = (id) => async (dispatch, getState) => {
  let cars = []
  const db = getFirestore()
  const state = getState()
  try {
    console.log("call", state.user.user)
    const ref = collection(db, "drivers", state.user.user, "cars")
    onSnapshot(ref, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        cars.push({ id: doc.id, ...doc.data() })
      })
      dispatch(driverCars(cars))
    })
  } catch (err) {
    console.log("ee", err)
  }
}
export const createBid = (values, amount, id) => async (dispatch, getState) => {
  try {
    const state = getState()
    const db = getFirestore()
    console.log("id", id)
    console.log("values", values)
    console.log("amount", amount)

    const res = await addDoc(collection(db, "car-request", id, "bids"), {
      numberPlate: values.numberPlate,
      carImages: values.carImages,
      numberPlate: values.numberPlate,
      ac: values.ac,
      seats: values.seats,
      baggage: values.baggage,
      carType: values.carType,
      createdAt: new Date().toDateString(),
      amount: amount,
      status: false,
    })
    console.log("res", res)
  } catch (err) {
  } finally {
  }
}
