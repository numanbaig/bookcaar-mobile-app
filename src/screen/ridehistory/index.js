import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native"
import React, { useEffect } from "react"
import { Entypo, Ionicons } from "@expo/vector-icons"
import { Paragraph, Card } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { getRidesHistory } from "../../store/services/Rides"
const RideHistory = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const ridesHistory = useSelector((state) => state.rides.ridesHistory)
  useEffect(() => {
    dispatch(getRidesHistory())
  }, [])

  return (
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
        <Paragraph
          style={{ fontSize: 20, fontWeight: "bold", color: "#09A391" }}
        >
          RideHistory
        </Paragraph>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {ridesHistory.map((e) => (
          <Card style={{ padding: 10, flex: 1 }}>
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
                  flex: 2.5,
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
                <Text style={{}}>
                  Completed Date:
                  <Text style={{ color: "#09A391" }}>Jutyal Gilgit</Text>
                </Text>

                <Text>
                  Drop Location:
                  <Text style={{ color: "#09A391" }}>Hunza</Text>
                </Text>
                <Text>
                  Booking Type:
                  <Text style={{ color: "#09A391" }}>Rental</Text>
                </Text>
                <Text>
                  Booking Days:
                  <Text style={{ color: "#09A391" }}>10</Text>
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}

export default RideHistory
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
})
