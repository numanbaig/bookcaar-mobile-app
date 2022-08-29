import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Card, Paragraph } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Maps from "../../components/map";
const Ride = (props) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          marginTop: 10,
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Entypo name="menu" color="#09A391" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RideDetail");
          }}
        >
          <Card style={{ padding: 15, flex: 1 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 80,
                  flex: 3,
                }}
              >
                <Card.Content>
                  <Image
                    style={styles.img}
                    source={require("../../../assets/userImage.jpg")}
                  />
                </Card.Content>
                <Card.Content>
                  <Paragraph style={{ fontSize: 16, fontWeight: "bold" }}>
                    User Name
                  </Paragraph>
                </Card.Content>
              </View>
              <View
                style={{
                  flex: 5.5,
                  justifyContent: "center",
                }}
              >
                <Text>
                  Pickup Location:
                  <Text>Jutyal Gilgit</Text>
                </Text>
                <Text>
                  Pickup Timing:
                  <Text>10:00 Am</Text>
                </Text>
                <Text>
                  Drop Location:
                  <Text>Hunza</Text>
                </Text>
                <Text>
                  Booking Type:
                  <Text>Rental</Text>
                </Text>
                <Text>
                  Status:
                  <Text>Status: </Text>
                </Text>
                <Text>
                  Booking Days:
                  <Text>10:</Text>
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Ride;

const styles = StyleSheet.create({
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnText2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#09A391",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,

    padding: 8,
    borderRadius: 10,
    margin: 5,
  },
  btn2: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,

    elevation: 2,
    margin: 5,
    borderColor: "blue",
    borderWidth: 0.5,
  },
});
