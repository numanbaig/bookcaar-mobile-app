import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
const Ride = () => {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Card>
        <Card.Cover
          style={{ height: 400 }}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Content style={{ padding: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: 150, fontSize: 18 }}>Date</Text>
            <Text style={{ fontSize: 20, color: "green" }}>10am July 2020</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: 150, fontSize: 18 }}>From:</Text>
            <Text style={{ fontSize: 20, color: "green" }}>Jutyal,Gilgit</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: 150, fontSize: 18 }}>Destination:</Text>
            <Text style={{ fontSize: 20, color: "green" }}>Hunza,Gilgit</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
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
          marginTop: 15,
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
