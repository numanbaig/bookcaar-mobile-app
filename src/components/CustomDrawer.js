import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import user from "../../assets/user.jpg";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
const DrawerContent = ({ ...props }) => {
  const navigation = useNavigation();
  const ratingCompleted = (rating) => {};
  return (
    <View style={{ flex: 1, backgroundColor: "#09A391" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image style={styles.img} source={user} />
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 20,
                }}
              >
                <Text style={styles.userName}>Nouman baig</Text>
                <Text style={styles.caption}>Daimond Star</Text>
                <Rating
                  type="star"
                  ratingCount={5}
                  ratingColor="green"
                  imageSize={18}
                  tintColor="#09A391"
                  onFinishRating={ratingCompleted}
                />
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              style={{ borderColor: "white", borderWidth: 1 }}
              labelStyle={{
                color: "white",
              }}
              icon={({ color, size }) => (
                <FontAwesome5 name="home" color="white" size={size} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate("Dashboard");
              }}
            />
            <DrawerItem
              style={{ borderColor: "white", borderWidth: 1 }}
              labelStyle={{
                color: "white",
              }}
              icon={({ color, size }) => (
                <AntDesign name="contacts" color="white" size={size} />
              )}
              label="My Account"
              onPress={() => {}}
            />
            <DrawerItem
              style={{ borderColor: "white", borderWidth: 1 }}
              labelStyle={{
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color="white"
                  size={size}
                />
              )}
              label="About"
              onPress={() => {
                navigation.navigate("About");
              }}
            />
            <DrawerItem
              style={{ borderColor: "white", borderWidth: 1 }}
              labelStyle={{
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <Entypo name="book" color="white" size={size} />
              )}
              label="FAQ"
              onPress={() => {
                navigation.navigate("Blogs");
              }}
            />
            <DrawerItem
              style={{ borderColor: "white", borderWidth: 1 }}
              labelStyle={{
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <Entypo name="book" color="white" size={size} />
              )}
              label="Support"
              onPress={() => {
                navigation.navigate("Blogs");
              }}
            />
            <DrawerItem
              style={{ borderColor: "white", borderWidth: 1 }}
              labelStyle={{
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <Entypo name="book" color="white" size={size} />
              )}
              label="Logout"
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    height: "100%",
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
    color: "white",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  caption: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  row: {
    marginTop: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
