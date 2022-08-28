import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { getCurrentUser } from "../../store/services/Auth"
import { useDispatch, useSelector } from "react-redux"
import { currentUser } from "../../store/slices/userSlice"
const Splash = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useSelector(currentUser)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  if (user) {
    navigation.replace("Home")
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={{ resizeMode: "contain", height: 150, width: 200 }}
      />
      <ActivityIndicator
        animating={true}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09A391",
  },
  activityIndicator: {
    alignItems: "center",
  },
})
