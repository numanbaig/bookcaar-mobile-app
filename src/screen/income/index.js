import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Income = () => {
  return (
    <View style={styles.container}>
      <Text>Income</Text>
    </View>
  );
};

export default Income;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
