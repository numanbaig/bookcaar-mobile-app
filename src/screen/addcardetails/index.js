import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import DropDownPicker from "react-native-dropdown-picker";
const AddCarDetails = () => {
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);
  const [seatOpen, setSeatOpen] = useState("");
  return (
    <View style={styles.mainBody}>
      <Text style={styles.paragraph}>Add Car Details</Text>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          placeholder="Enter Email"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          placeholder="Enter Email"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.SectionStyle}>
        <DropDownPicker
          placeholder="Select Seats"
          open={seatOpen}
          setOpen={setSeatOpen}
          items={[
            { label: "English", value: "en" },
            { label: "Deutsch", value: "de" },
            { label: "French", value: "fr" },
          ]}
          defaultIndex={0}
          containerStyle={{ height: 40 }}
          onChangeItem={(item) => console.log(item.label, item.value)}
          zIndex={1000}
          zIndexInverse={3000}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonTextStyle}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCarDetails;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "whites",
    alignContent: "center",
  },
  section: {
    paddingBottom: 5,
    flexDirection: "row",
    flex: 1,
  },
  checkbox: {
    marginright: 10,
  },
  inputStyle: {
    flex: 1,
    color: "#09A391",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,

    borderColor: "#09A391",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  headingStyles: {
    color: "#09A391",
  },
  innerContainer: {
    flex: 1,
    margin: 20,
    marginTop: 50,
  },
  inputContainer: {
    marginBottom: 10,
  },
  dropdownCompany: {
    flexDirection: "row",
  },
  dropdown: {
    marginVertical: 10,
    borderColor: "#B7B7B7",
    height: 50,
  },
  input: {
    borderRadius: 10,
    marginVertical: 10,
    height: 50,
    color: "#09A391",

    borderColor: "black",
    paddingLeft: 14,
    borderWidth: 1,
  },
  checkbox: {
    marginRight: 8,
    alignItems: "center",
  },
  imageComponent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  add: {
    backgroundColor: "#939393",
    position: "absolute",
    bottom: 4,
    right: 140,
    width: 20,
    height: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#09A391",
    borderWidth: 0,
    borderColor: "#7DE24E",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 15,
    margin: 20,
    marginHorizontal: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
