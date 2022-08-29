import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Entypo, Ionicons } from "@expo/vector-icons"
import React, { useEffect } from "react"
import { Card } from "react-native-paper"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import Maps from "../../components/map"
import { Linking } from "react-native"
import { getActiveRides } from "../../store/services/Rides"
import { useDispatch, useSelector } from "react-redux"
const RideDetail = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const activeRides = useSelector((state) => state.rides.rides)
  console.log("ss", activeRides)

  useEffect(() => {
    dispatch(getActiveRides())
  }, [])
  return (
    <>
      {!activeRides.length ? (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 600,
          }}
        >
          <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
            No Active Rides
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
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
                navigation.openDrawer()
              }}
            >
              <Entypo name="menu" color="#09A391" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                color="#09A391"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <Card
            style={{
              margin: 15,
            }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ height: 300, width: "100%" }}
              showsUserLocation
            />
            <Card.Content style={{ padding: 25 }}>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  Date
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391" }}>
                  10am July 2020
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  From:
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391" }}>
                  Jutyal,Gilgit
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  Destination:
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391" }}>
                  Hunza,Gilgit
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  Fare:
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391" }}>Rs3000</Text>
              </View>
            </Card.Content>
          </Card>
          <TouchableOpacity
            style={{
              backgroundColor: "#09A391",
              borderWidth: 0,
              color: "#FFFFFF",
              borderColor: "#7DE24E",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 25,
              marginBottom: 25,
            }}
            activeOpacity={0.5}
          >
            <Text
              onPress={() => {
                dispatch(getActiveRides())
                // Linking.openURL(`tel:${phoneNumber}`);
              }}
              style={{
                color: "#FFFFFF",
                paddingVertical: 10,
                fontSize: 18,
              }}
            >
              CALL
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default RideDetail

const styles = StyleSheet.create({})
