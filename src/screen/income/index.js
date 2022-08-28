import { StyleSheet, View, Button, Text, Modal } from "react-native";
import React from "react";
const Income = () => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  return <View style={styles.surface}></View>;
};

export default Income;

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
