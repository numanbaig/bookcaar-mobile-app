import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import { Card, TextInput, Paragraph, Text } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { getCarDetails, createBid } from "../../store/services/Bidding"
import { useDispatch, useSelector } from "react-redux"

const Bidding = ({ route }, props) => {
  const { userData, id } = route?.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  const cars = useSelector((state) => state.bidding.cars)

  useEffect(() => {
    dispatch(getCarDetails(userData.id))
  }, [])

  console.log("ss", cars)
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
        <TextInput
          keyboardType="numeric"
          mode="outlined"
          onChangeText={(e) => setAmount(e)}
          label=""
          placeholder="Bidding Amount"
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(createBid(cars[0], amount, userData.id))
          }}
          style={styles.btn}
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
