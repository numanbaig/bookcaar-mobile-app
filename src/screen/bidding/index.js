import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Card, TextInput, Paragraph, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Bidding = ({ route }, props) => {
  const { userData } = route?.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 20,
          backgroundColor: "#09A391",
        }}
      >
        <Image style={styles.img} source={userData.userImageUrl} />
        <Text
          style={{ paddingTop: 10, fontWeight: "bold", height: 200, flex: 1 }}
          variant="headlineMedium"
        >
          {userData.userName}
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Pickup Location:
          </Text>
          <Text
            style={{ paddingBottom: 15, fontWeight: "bold", color: "#09A391" }}
            variant="titleMedium"
          >
            {userData.pickupLocation}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Drop Location:
          </Text>
          <Text
            style={{ paddingBottom: 15, fontWeight: "bold", color: "#09A391" }}
            variant="titleMedium"
          >
            {userData.dropLocation}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Date and Time:
          </Text>
          <Text
            style={{ paddingBottom: 15, fontWeight: "bold", color: "#09A391" }}
            variant="titleMedium"
          >
            {userData.pickupTiming}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Booking Type:
          </Text>
          <Text
            style={{ paddingBottom: 15, fontWeight: "bold", color: "#09A391" }}
            variant="titleMedium"
          >
            {userData.tripType}
          </Text>
        </View>
        {userData.tripType === "Per Day" ? (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ paddingBottom: 15, width: 120 }}
              variant="titleMedium"
            >
              Booking Days:
            </Text>
            <Text
              style={{
                paddingBottom: 15,
                fontWeight: "bold",
                color: "#09A391",
              }}
              variant="titleMedium"
            >
              {userData.bookingDay}
            </Text>
          </View>
        ) : (
          ""
        )}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Asking Amount:
          </Text>
          <Text
            style={{ paddingBottom: 15, fontWeight: "bold", color: "#09A391" }}
            variant="titleMedium"
          >
            100 Pkr
          </Text>
        </View>
        <TextInput mode="outlined" label="" placeholder="Bidding Amount" />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Bid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bidding;

const styles = StyleSheet.create({
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: "#09A391",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
    elevation: 5,
    paddingVertical: 18,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
