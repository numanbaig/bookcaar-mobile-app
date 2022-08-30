import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth"
import {
  query,
  setDoc,
  collection,
  where,
  doc,
  getFirestore,
  getDoc,
  getDocs,
} from "firebase/firestore"
import { auth } from "../../firebase"
import {
  userAdded,
  toogleAuthLoading,
  toggleAppLoading,
  setCurrentUser,
} from "../slices/userSlice"
import { uploadImageAndDownloadUrl } from "../helpers/uploadImage"

export const createUserWithEmail = (values) => async (dispatch) => {
  try {
    dispatch(toogleAuthLoading())
    const db = getFirestore()

    let profileImage = ""
    let cnicUrl = ""
    if (values.cnicImage) {
      cnicUrl = await uploadImageAndDownloadUrl(
        values.cnicImage,
        values.cnic,
        "cnic.jpeg"
      )
    }

    if (values.profileImage) {
      profileImage = await uploadImageAndDownloadUrl(
        values.profileImage,
        values.name,
        "profileimage.jpeg"
      )
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
    const user = await setDoc(
      doc(db, "drivers", `${userCredential.user.uid}`),
      {
        uid: userCredential.user.uid,
        name: values.name,
        email: values.email,
        cnicUrl: cnicUrl,
        profileImage: profileImage || "",
        phoneNumber: values.phoneNumber,
        cnic: values.cnic,
        metadata: {
          createdAt: userCredential.user.metadata.createdAt,
          creationTime: userCredential.user.metadata.creationTime,
          lastLoginAt: userCredential.user.metadata.lastLoginAt,
          lastSignInTime: userCredential.user.metadata.lastSignInTime,
        },
      }
    )
  } catch (err) {
  } finally {
    dispatch(toogleAuthLoading())
  }
}

export const loginWithEmail = createAsyncThunk(
  "users/loginWithEmail",
  async ({ email, password }) => {
    console.log("login", login)
    return await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user
        return user
      }
    )
  }
)

export const getCurrentUser = () => async (dispatch) => {
  try {
    const auth = getAuth()
    const db = getFirestore()
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(userAdded(user.uid))
        let cars = []
        const docRef = doc(db, "drivers", user.uid)
        const docSnap = await getDoc(docRef)
        const carRef = collection(db, "drivers", user.uid, "cars")
        const carSnap = await getDocs(carRef)

        if (docSnap.exists() || carSnap.exists()) {
          const currentUser = docSnap?.data()

          carSnap.forEach((doc) => {
            cars.push({ id: doc.id, ...doc.data() })
          })
          dispatch(
            setCurrentUser({
              name: currentUser?.name,
              id: currentUser.uid,
              email: currentUser.email,
              phoneNumber: currentUser.phoneNumber,
              profileImage: currentUser.profileImage,
              vehicalName: cars[0]?.vehicalName || "",
              noOfSeats: cars[0]?.noOfSeats || "",
              numberPlate: cars[0]?.numberPlate || "",
              ac: cars[0]?.ac || "",
              carImages: cars[0]?.carImages || "",
              carType: cars[0]?.carType || "",
              baggage: cars[0]?.baggage || "",
            })
          )
        }
      }
      dispatch(toggleAppLoading())
    })
  } catch (e) {
  } finally {
  }
}

export const signOutUser = createAsyncThunk("users/signOutUser", async () => {
  await signOut(auth)
})
