import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Paragraph } from "react-native-paper";

const Insurance = (props) => {
  const { navigation } = props;

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
            navigation.openDrawer();
          }}
        >
          <Entypo name="menu" color="#09A391" size={25} />
        </TouchableOpacity>
        <Paragraph
          style={{ fontSize: 20, fontWeight: "bold", color: "#09A391" }}
        >
          Insurance
        </Paragraph>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" color="#09A391" size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#09A391" }}>
          Coming Soon
        </Text>
      </View>
    </View>
  );
};

export default Insurance;
