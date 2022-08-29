import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import { getDriverRideRequests } from "../../store/services/Bidding";
import { useDispatch, useSelector } from "react-redux";
import { driverBids } from "../../store/slices/biddingSlice";
const RideRequest = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const biddingList = useSelector(driverBids);

  useEffect(() => {
    dispatch(getDriverRideRequests());
  }, []);

  return (
    <View>
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
        <Paragraph
          style={{ fontSize: 20, fontWeight: "bold", color: "#09A391" }}
        >
          Ride Requests
        </Paragraph>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {biddingList.map((e, index) => {
          return (
            <Card key={index} style={{ padding: 15 }}>
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
                    {e.imageUrl ? (
                      <Image style={styles.img} source={{ uri: e.imageUrl }} />
                    ) : (
                      <Image
                        style={styles.img}
                        source={require("../../../assets/user.jpg")}
                      />
                    )}
                  </Card.Content>
                  <Card.Content>
                    <Paragraph style={{ fontSize: 16, fontWeight: "bold" }}>
                      {e.name}
                    </Paragraph>
                    <Paragraph>{e.pickupTiming}</Paragraph>
                  </Card.Content>
                </View>
                <View
                  style={{
                    flex: 5.5,
                    justifyContent: "center",
                  }}
                >
                  <Text>Pickup Location:{e.pickupLocation}</Text>
                  <Text>Drop Location: {e.dropLocation}</Text>
                  <Text>Booking Type: {e.tripType}</Text>
                  <Text>Status: {e.status ? "Active" : "Pending"}</Text>
                  {e.tripType === "Per Day" ? (
                    <Text>Booking Days: {e.bookingDay}</Text>
                  ) : (
                    <Text></Text>
                  )}
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => {}} style={styles.btn2}>
                      <Text style={styles.btnText2}>Remove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Bidding", {
                          userData: e,
                        });
                      }}
                      style={styles.btn}
                    >
                      <Text style={styles.btnText}>Re-Bid</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RideRequest;

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
