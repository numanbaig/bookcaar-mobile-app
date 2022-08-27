import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace("SignIn");
      //   AsyncStorage.getItem("user_id").then((value) =>
      //     navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes")
      //   );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={{ resizeMode: "contain", height: 150, width: 200 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
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
    backgroundColor: "#09A391",
  },
  activityIndicator: {
    alignItems: "center",
  },
});
