import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Card, Paragraph } from "react-native-paper";
import { getBidding } from "../../store/services/Bidding";
import { useDispatch, useSelector } from "react-redux";
import { bidding } from "../../store/slices/biddingSlice";

const Dashboard = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const biddingList = useSelector(bidding);

  useEffect(() => {
    dispatch(getBidding());
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
          Requests
        </Paragraph>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {!biddingList ? (
          <View>No Request for Rides </View>
        ) : (
          biddingList.map((e, index) => {
            return (
              <Card key={index} style={{ padding: 15, marginTop: 15 }}>
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
                        <Image
                          style={styles.img}
                          source={{ uri: e?.imageUrl }}
                        />
                      ) : (
                        <Image
                          style={styles.img}
                          source={require("../../../assets/user.jpg")}
                        />
                      )}
                    </Card.Content>
                    <Card.Content>
                      <Paragraph
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        {e?.requestedUser?.displayName}
                      </Paragraph>
                      <Paragraph
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        {e?.startDate}
                      </Paragraph>
                      <Paragraph>
                        {e?.pickupTiming?.toLocaleTimeString?.() ||
                          "Not Addded"}
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
                      <Text style={{ color: "#09A391" }}>
                        {e?.pickUpLocation?.label}
                      </Text>
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                      Drop Location:
                      <Text style={{ color: "#09A391" }}>
                        {e?.dropOfLocation?.label}
                      </Text>
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                      Booking Type:
                      <Text style={{ color: "#09A391" }}>{e?.bookingType}</Text>
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                      Vehical Type:
                      <Text style={{ color: "#09A391" }}>{e?.vehicalType}</Text>
                    </Text>
                    {e?.bookingType === "Per Day" ? (
                      <Text style={{ marginTop: 10 }}>
                        Number of Days:
                        <Text style={{ color: "#09A391" }}>
                          {e?.numberofdays}
                        </Text>
                      </Text>
                    ) : (
                      <Text></Text>
                    )}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Bidding", {
                            userData: e,
                          });
                        }}
                        style={styles.btn}
                      >
                        <Text style={styles.btnText}>Bid</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Card>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

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
const TravelRequest = [
  {
    userName: "DT",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Danyore",
    pickupTiming: "10 july 2:00pm",
    userImageUrl: require("../../../assets/userImage.jpg"),
    bookingDay: "10",
    tripType: "Per Day",
  },
  {
    userName: "Saleem Merchant",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Ghizer",
    pickupTiming: "11 july 2:00pm",
    userImageUrl: require("../../../assets/user.jpg"),
    bookingDay: "10",
    tripType: "Short Rental",
  },
  {
    userName: "Sharuk Khan",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Danyore",
    pickupTiming: "10 july 2:00pm",
    userImageUrl: require("../../../assets/userImage.jpg"),
    bookingDay: "10",
    tripType: "Per Day",
  },
  {
    userName: "Saleem Merchant",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Ghizer",
    pickupTiming: "11 july 2:00pm",
    userImageUrl: require("../../../assets/user.jpg"),
    bookingDay: "10",
    tripType: "Short Rental",
  },
  {
    userName: "DT",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Danyore",
    pickupTiming: "10 july 2:00pm",
    userImageUrl: require("../../../assets/userImage.jpg"),
    bookingDay: "10",
    tripType: "Per Day",
  },
  {
    userName: "Saleem Merchant",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Ghizer",
    pickupTiming: "11 july 2:00pm",
    userImageUrl: require("../../../assets/user.jpg"),
    bookingDay: "10",
    tripType: "Short Rental",
  },
  {
    userName: "DT",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Danyore",
    pickupTiming: "10 july 2:00pm",
    userImageUrl: require("../../../assets/user.jpg"),
    bookingDay: "10",
    tripType: "Per Day",
  },
  {
    userName: "Saleem Merchant",
    pickupLocation: "Jutyal Gilgit",
    dropLocation: "Ghizer",
    pickupTiming: "11 july 2:00pm",
    userImageUrl: require("../../../assets/user.jpg"),
    bookingDay: "10",
    tripType: "Short Rental",
  },
];
