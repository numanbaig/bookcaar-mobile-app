import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Card } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Maps from "../../components/map";
const Ride = (props) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, padding: 15 }}>
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
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <Card>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ height: 400, width: "100%" }}
          showsUserLocation
        />
        <Card.Content style={{ padding: 25 }}>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ width: 150, fontSize: 18 }}>Date</Text>
            <Text style={{ fontSize: 20, color: "green" }}>10am July 2020</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ width: 150, fontSize: 18 }}>From:</Text>
            <Text style={{ fontSize: 20, color: "green" }}>Jutyal,Gilgit</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ width: 150, fontSize: 18 }}>Destination:</Text>
            <Text style={{ fontSize: 20, color: "green" }}>Hunza,Gilgit</Text>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text style={{ width: 150, fontSize: 18 }}>Fare:</Text>
            <Text style={{ fontSize: 20, color: "green" }}>Rs3000</Text>
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
  );
};

export default Ride;

const styles = StyleSheet.create({});
