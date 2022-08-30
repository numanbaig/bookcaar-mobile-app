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
import { signOutUser } from "../store/services/Auth";
import { currentUser } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
const DrawerContent = ({ ...props }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  const ratingCompleted = (rating) => {};
  console.log(user, "user here");
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
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Image
                  style={styles.img}
                  source={{ uri: user?.profileImage }}
                />
              </View>

              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.caption}>Daimond Star</Text>
                <Rating
                  type="star"
                  ratingCount={5}
                  ratingColor="green"
                  imageSize={18}
                  style={{
                    paddingTop: 10,
                  }}
                  tintColor="#09A391"
                  onFinishRating={ratingCompleted}
                />
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
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
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
                color: "white",
              }}
              icon={({ color, size }) => (
                <FontAwesome5 name="car" color="white" size={size} />
              )}
              label="Add Car"
              onPress={() => {
                navigation.navigate("AddCarDetails");
              }}
            />
            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
                paddingLeft: 5,
                color: "white",
              }}
              icon={({ color, size }) => (
                <FontAwesome5
                  style={{
                    paddingLeft: 5,
                  }}
                  name="dollar-sign"
                  color="white"
                  size={size}
                />
              )}
              label="My Income"
              onPress={() => {
                navigation.navigate("income");
              }}
            />
            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
                color: "white",
              }}
              icon={({ color, size }) => (
                <Entypo name="bar-graph" color="white" size={size} />
              )}
              label="Rating"
              onPress={() => {}}
            />
            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
                color: "white",
              }}
              icon={({ color, size }) => (
                <AntDesign name="contacts" color="white" size={size} />
              )}
              label="My Account"
              onPress={() => {}}
            />
            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
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
              onPress={() => {}}
            />
            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                fontSize: 18,
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="head-question-outline"
                  color="white"
                  size={size}
                />
              )}
              label="FAQ"
              onPress={() => {}}
            />

            <DrawerItem
              style={{ borderColor: "white" }}
              labelStyle={{
                color: "white",
                fontSize: 18,
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <AntDesign name="logout" color="white" size={size} />
              )}
              label="Logout"
              onPress={() => {
                dispatch(signOutUser());
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
    marginTop: 15,
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
    fontSize: 18,
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
    paddingLeft: 10,
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
