import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { currentUser, appLoading } from "../../store/slices/userSlice";

const Splash = () => {
  const navigation = useNavigation();
  const user = useSelector(currentUser);
  const loading = useSelector(appLoading);
  if (user && !loading) {
    navigation.replace("Home");
  }
  if (!user && !loading) {
    navigation.replace("SignIn");
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/appLogo2.png")}
        style={{ resizeMode: "contain", height: 350 }}
      />
      <ActivityIndicator
        animating={true}
        color="#09A391"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  activityIndicator: {
    alignItems: "center",
  },
});
