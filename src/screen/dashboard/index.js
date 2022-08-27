import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { withTheme } from "react-native-paper";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
const Dashboard = (props) => {
  const { navigation } = props;
  const { colors } = props.theme;
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
          <Entypo name="menu" color={colors.primary} size={25} />
        </TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          color={colors.primary}
          size={25}
        />
      </View>
      <ScrollView>
        {TravelRequest.map((e, index) => {
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
                    flex: 1,
                  }}
                >
                  <Card.Content>
                    <Image style={styles.img} source={e.userImageUrl} />
                  </Card.Content>
                  <Card.Content>
                    <Title>{e.userName}</Title>
                    <Paragraph>{e.pickupTiming}</Paragraph>
                  </Card.Content>
                </View>
                <View
                  style={{
                    flex: 2,
                    justifyContent: "center",
                  }}
                >
                  <Paragraph>Pickup Location:{e.pickupLocation}</Paragraph>
                  <Paragraph>Drop Location: {e.dropLocation}</Paragraph>
                  <Paragraph>Booking Type: {e.tripType}</Paragraph>
                  {e.tripType === "Per Day" ? (
                    <Paragraph>Booking Days: {e.bookingDay}</Paragraph>
                  ) : (
                    <Text></Text>
                  )}
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.openDrawer();
                      }}
                      style={styles.btn2}
                    >
                      <Text style={styles.btnText2}>Cancel</Text>
                    </TouchableOpacity>
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
        })}
      </ScrollView>
    </View>
  );
};

export default withTheme(Dashboard);

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
    elevation: 5,
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  btn2: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    elevation: 5,
    margin: 5,
    borderColor: "red",
    borderWidth: 1,
  },
});
const TravelRequest = [
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
