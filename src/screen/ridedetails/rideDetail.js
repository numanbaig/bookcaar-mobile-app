import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Entypo, Ionicons } from "@expo/vector-icons"
import React, { useEffect } from "react"
import { Card } from "react-native-paper"
import Maps from "../../components/map"
import { useNavigation } from "@react-navigation/native"
import { Linking } from "react-native"
import { getActiveRides, endRide } from "../../store/services/Rides"
import { useDispatch, useSelector } from "react-redux"
const RideDetail = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const activeRides = useSelector((state) => state?.rides?.rides)
  console.log("ss", activeRides)
  useEffect(() => {
    dispatch(getActiveRides())
  }, [])
  return (
    <>
      {!activeRides.length ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 16 }}>No Active Rides</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Maps activeRides={activeRides} />
          <Card
            style={{
              marginHorizontal: 15,
              borderRadius: 15,
            }}
          >
            <Card.Content style={{ padding: 25 }}>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  Client
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391" }}>
                  {activeRides[0]?.requestedUser?.displayName}
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  From:
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391", width: 200 }}>
                  {activeRides[0]?.pickUpLocation?.label}
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={{ width: 150, fontSize: 16, fontWeight: "bold" }}>
                  Destination:
                </Text>
                <Text style={{ fontSize: 16, color: "#09A391", width: 200 }}>
                  {activeRides[0]?.dropOfLocation?.label}
                </Text>
              </View>
            </Card.Content>
          </Card>
          {activeRides[0]?.requestedUser && (
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
                marginVertical: 10,
              }}
              activeOpacity={0.5}
            >
              <Text
                onPress={() => {
                  Linking.openURL(
                    `tel:${activeRides[0]?.requestedUser?.phoneNumber}`
                  )
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
          )}
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
              marginVertical: 5,
            }}
            onPress={() => {
              dispatch(endRide(activeRides[0].id))
              navigation.navigate("Home")
            }}
            activeOpacity={0.5}
          >
            <Text
              onPress={() => {}}
              style={{
                color: "#FFFFFF",
                paddingVertical: 10,
                fontSize: 18,
              }}
            >
              End Ride
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default RideDetail

const styles = StyleSheet.create({})
