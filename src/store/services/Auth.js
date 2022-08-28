import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { query, getDocs, collection, where, addDoc } from "firebase/firestore"
import { firebase } from "../../firebase"

export const createUserWithEmail = createAsyncThunk(
  "users/createUserWithEmail",
  async ({ email, password }) => {
    const db = firebase.firestore()
    const userCredential = await createUserWithEmailAndPassword(
      firebase.auth,
      email,
      password
    )
    console.log("userCredential", userCredential)
    const user = await addDoc(collection(db, "users"), {
      uid: userCredential.uid,
      name: user.displayName,
      email: user.email,
    })
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
