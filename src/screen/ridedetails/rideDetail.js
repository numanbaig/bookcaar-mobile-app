import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Card } from "react-native-paper";
import Maps from "../../components/map";
import { Linking } from "react-native";
import { getActiveRides } from "../../store/services/Rides";
import { useDispatch, useSelector } from "react-redux";
const RideDetail = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeRides = useSelector((state) => state.rides.rides);
  console.log("ss", activeRides);

  useEffect(() => {
    dispatch(getActiveRides());
  }, []);
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
              marginVertical: 18,
            }}
            activeOpacity={0.5}
          >
            <Text
              onPress={() => {
                dispatch(getActiveRides());
                Linking.openURL(
                  `tel:${activeRides?.requestedUser?.phoneNumber}`
                );
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
  );
};

export default RideDetail;

const styles = StyleSheet.create({});
