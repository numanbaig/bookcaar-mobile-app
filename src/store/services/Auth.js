import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { query, getDocs, collection, where, addDoc } from "firebase/firestore"
import { auth, db } from "../../firebase"

export const createUserWithEmail = createAsyncThunk(
  "users/createUserWithEmail",
  async ({ email, password }) => {
    console.log("hmmm", email)
    console.log("pas", auth)
    let user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log("userCredential", userCredential)
    if (userCredential) {
      user = await addDoc(collection(db, "drivers"), {
        uid: userCredential.uid,
        name: user.displayName,
        email: user.email,
      })
    }

    console.log("user", user)
    return user
  }
)

export const loginWithEmail = createAsyncThunk(
  "users/loginWithEmail",
  async ({ email, password }) => {
    return await signInWithEmailAndPassword(
      firebase.auth,
      email,
      password
    ).then((userCredential) => {
      const user = userCredential.user
      return user
    })
  }
)

export const signOutUser = createAsyncThunk("users/signOutUser", async () => {
  await signOut(auth)
})
