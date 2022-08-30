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
import {
  setBiddingList,
  currentDriverBids,
  carsAdded,
  driverCars,
  driverBidsList,
} from "../slices/biddingSlice"
import { uploadImageAndDownloadUrl } from "../helpers/uploadImage"
export const getBidding = () => async (dispatch) => {
  const db = getFirestore()
  const q = query(
    collection(db, "car-request"),
    where("completed", "==", false),
    where("hiredRiderId", "==", "")
  )

  onSnapshot(q, (querySnapshot) => {
    let bidding = []
    querySnapshot.forEach((doc) => {
      bidding.push({ id: doc.id, ...doc.data() })
    })
    dispatch(setBiddingList(bidding))
  })
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
      vehicalModal: values.vehicalModal,
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
export const createBid =
  (values, amount, id, biddedDrivers) => async (dispatch, getState) => {
    try {
      const state = getState()
      const db = getFirestore()
      const currentUser = state.user.currentUser
      let drivers = biddedDrivers || []
      drivers.push(state.user.user)
      const res = await setDoc(
        doc(db, "car-request", id, "bids", state.user.user),
        {
          numberPlate: values.numberPlate,
          carImages: values.carImages,
          ac: values.ac,
          seats: values.seats,
          baggage: values.baggage,
          carType: values.carType,
          createdAt: new Date().toDateString(),
          amount: amount,
          status: false,
          deriverName: currentUser.name,
          profileImage: currentUser.profileImage,
          email: currentUser.email,
          phoneNumber: currentUser.phoneNumber,
          vehicalName: currentUser.vehicalModal,
        }
      )

      await updateDoc(doc(db, "car-request", id), {
        bidedDrivers: drivers,
      })
    } catch (err) {
    } finally {
    }
  }
export const getDriverBidding = () => async (dispatch, getState) => {
  let bidding = []
  let request = []
  const db = getFirestore()
  const state = getState()

  const querySnapshot = await getDocs(collection(db, "car-request"))
  await querySnapshot.forEach((doc) => {
    if (doc.data()?.bidedDrivers?.includes(state.user.user)) {
      request.push(doc.id)
    }
  })

  for (let i = 0; i < request.length; i++) {
    let q = query(doc(db, "car-request", request[i], "bids", state.user.user))
    const bidSnapshot = await getDoc(q)
    bidding.push({ id: bidSnapshot.id, ...bidSnapshot.data() })
  }
  dispatch(driverBidsList(bidding))
}
