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
import { useNavigation } from "@react-navigation/native";
const DrawerContent = ({ ...props }) => {
  //   const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Image style={styles.img} source={user} />
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Fontisto name="ship" color="orange" size={20} />
                <Text style={styles.caption}>Only $150 Shipping Fee</Text>
                {/* <Text style={styles.caption}>Following</Text> */}
              </View>
              <View style={styles.section}>
                <FontAwesome5 name="user-tie" color="orange" size={20} />
                <Text style={styles.caption}>Contact +61 450 244 828</Text>
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{
                color: "white",
              }}
              icon={({ color, size }) => (
                <FontAwesome5 name="home" color="purple" size={size} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate("Root");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
              }}
              icon={({ color, size }) => (
                <AntDesign name="contacts" color="purple" size={size} />
              )}
              label="Contact"
              onPress={() => {}}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color="purple"
                  size={size}
                />
              )}
              label="About"
              onPress={() => {
                navigation.navigate("About");
              }}
            />
            <DrawerItem
              labelStyle={{
                color: "white",
              }}
              activeTintColor={"blue"}
              icon={({ color, size }) => (
                <Entypo name="book" color="purple" size={size} />
              )}
              label="Blogs"
              onPress={() => {
                navigation.navigate("Blogs");
              }}
            />
          </View>
          {/* <View>
          <Text>@numanbaig_</Text>
        </View> */}
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
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
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
// import React from "react";
// import {
//   DrawerItemList,
//   DrawerItem,
//   DrawerContentScrollView,
// } from "@react-navigation/drawer";
// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Home" />
//     </DrawerContentScrollView>
//   );
// };
// export default CustomDrawerContent;
