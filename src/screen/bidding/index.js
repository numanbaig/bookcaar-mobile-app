import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import { Card, TextInput, Paragraph, Text } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { getCarDetails, createBid } from "../../store/services/Bidding"
import { useDispatch, useSelector } from "react-redux"
import { Entypo, Ionicons } from "@expo/vector-icons"

const Bidding = ({ route }, props) => {
  const { userData, id } = route?.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  const cars = useSelector((state) => state.bidding.cars)

  useEffect(() => {
    dispatch(getCarDetails(userData.id))
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          paddingHorizontal: 20,
          alignItems: "center",
          backgroundColor: "#09A391",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{ alignItems: "center" }}
        >
          <Ionicons name="md-chevron-back-sharp" color="white" size={35} />
        </TouchableOpacity>
        <Paragraph
          style={{ fontSize: 20, fontWeight: "bold", color: "#09A391" }}
        >
          Requests
        </Paragraph>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 17,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Pickup Location:
          </Text>
          <Text
            style={{
              paddingBottom: 15,
              fontWeight: "bold",
              color: "#09A391",
              width: 260,
            }}
            variant="titleMedium"
          >
            {userData?.pickUpLocation?.label}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Drop Location:
          </Text>
          <Text
            style={{
              paddingBottom: 15,
              fontWeight: "bold",
              color: "#09A391",
              width: 260,
            }}
            variant="titleMedium"
          >
            {userData?.dropOfLocation?.label}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingBottom: 15, width: 120 }} variant="titleMedium">
            Date and Time:
          </Text>
          <Text
            style={{
              paddingBottom: 15,
              fontWeight: "bold",
              color: "#09A391",
              width: 260,
            }}
            variant="titleMedium"
          >
            {userData?.startDate?.toLocaleTimeString?.() || "Not Addded"}
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
            {userData?.bookingType}
          </Text>
        </View>
        {userData?.bookingType === "Per Day" ? (
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
              {userData?.numberofdays}
            </Text>
          </View>
        ) : (
          ""
        )}
        <TextInput
          keyboardType="numeric"
          mode="outlined"
          onChangeText={(e) => setAmount(e)}
          label=""
          placeholder="Bidding Amount"
          activeOutlineColor="#C6C6C6"
          outlineColor="#C6C6C6"
          style={{ borderWidth: 0.1 }}
        />
        <TouchableOpacity
          onPress={() => {
            if (amount) {
              dispatch(
                createBid(cars[0], amount, userData.id, userData.bidedDrivers)
              )
              navigation.navigate("Home")
            }
          }}
          style={{ ...styles.btn, opacity: amount ? 1 : 0.5 }}
        >
          <Text style={styles.btnText}>Bid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={styles.btn2}
        >
          <Text style={styles.btnText2}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Bidding

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
  btn2: {
    borderColor: "#09A391",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 15,
    marginTop: 15,
    paddingVertical: 18,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnText2: {
    color: "#09A391",
    fontWeight: "bold",
    fontSize: 16,
  },
})
