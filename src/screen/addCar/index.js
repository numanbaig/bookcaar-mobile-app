import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";
import { Formik, Form } from "formik";

const AddCar = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isChecked, setChecked] = useState(false);
  const [seatOpen, setSeatOpen] = useState("");
  const [carType, setCarType] = useState("");
  const [seatValue, setSeatValue] = useState("");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setBool(true);
      setImage(result.uri);
    }
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Required"),
  });
  return (
    <View style={styles.mainBody}>
      <Formik
        initialValues={{
          numberPlate: "",
          ac: false,
          seats: "",
          baggage: "",
          carType: "",
          carImages: "",
          carModal: "",
        }}
        onSubmit={(values) => {
          console.log(values, "juuuu");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          setFieldValue,
          errors,
        }) => (
          <>
            <Text style={styles.paragraph}>Add Car Details</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Vehical Registration Number(Number Plate)"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                required={true}
                onChangeText={handleChange("numberPlate")}
                value={values.numberPlate}
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
                placeholder="Car Model"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                required={true}
                onChangeText={handleChange("numberPlate")}
                value={values.carModal}
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              {/* <DropDownPicker
                placeholder="Select Seats"
                value={values.seats}
                selectedValue={values.seats}
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChange={(item) => {
                  setFieldValue("carType", nextValue);
                }}
              />
            </View> */}
              <View style={styles.SectionStyle}>
                <Picker
                  style={styles.defaultPicker}
                  selectedValue={values.seats}
                  onValueChange={(nextValue) =>
                    setFieldValue("seats", nextValue)
                  }
                  placeholder="Select Car Type"
                >
                  <Picker.Item label="Select a Car Type" value="1" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="3" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                </Picker>
              </View>
            </View>
            <View style={styles.SectionStyle}>
              <DropDownPicker
                placeholder="Select Baggage"
                value={values.baggage}
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                selectedValue={values.baggage}
                onValueChange={(nextValue) =>
                  setFieldValue("carType", nextValue)
                }
                zIndex={1000}
                zIndexInverse={3000}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Picker
                style={styles.defaultPicker}
                selectedValue={values.carType}
                onValueChange={(nextValue) =>
                  setFieldValue("carType", nextValue)
                }
                placeholder="Select Car Type"
              >
                <Picker.Item label="Select a Car Type" value="1" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="3" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            <View style={styles.section}>
              <Checkbox
                type={"checkbox"}
                value={values.ac}
                style={{ color: "#09A391", margin: 15 }}
              />

              <Text>AC available</Text>
            </View>
            <TouchableOpacity
              style={styles.uploadButtonStyle}
              activeOpacity={0.5}
              onPress={pickImage}
            >
              <Text style={styles.uploadButtonTextStyle}>
                Upload Car Pictures
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default AddCar;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "whites",
    alignContent: "center",
  },
  defaultPicker: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "red",
    paddingLeft: 15,
    backgroundColor: "white",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
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
    marginHorizontal: 15,
  },
  uploadButtonStyle: {
    backgroundColor: "white",
    borderWidth: 0,
    borderColor: "#09A391",
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 15,
    marginTop: 15,
  },
  uploadButtonTextStyle: {
    color: "black",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
