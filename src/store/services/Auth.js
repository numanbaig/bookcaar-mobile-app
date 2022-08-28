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
} from "firebase/firestore"
import { auth } from "../../firebase"
import { userAdded } from "../slices/userSlice"
import { uploadImageAndDownloadUrl } from "../helpers/uploadImage"

export const createUserWithEmail = createAsyncThunk(
  "users/createUserWithEmail",
  async (values) => {
    const db = getFirestore()

    let profileImage
    let cnicUrl

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
    console.log("userrrr", user)
    return user
  }
)

export const loginWithEmail = createAsyncThunk(
  "users/loginWithEmail",
  async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user
        return user
      }
    )
  }
)

export const getCurrentUser = () => async (dispatch) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(userAdded(user.uid))
    }
  })
}

export const signOutUser = createAsyncThunk("users/signOutUser", async () => {
  await signOut(auth)
})
