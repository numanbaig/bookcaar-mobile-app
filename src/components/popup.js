import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dialog, Surface } from "react-native-paper";

const PopUpComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <Surface>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Text style={styles.title}>This is a title</Text>
        <View>
          <Text>This is simple dialog</Text>
        </View>
      </Dialog>
    </Surface>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default PopUpComponent;
