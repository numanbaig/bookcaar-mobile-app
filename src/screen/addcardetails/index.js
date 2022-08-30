import React, { useState } from "react"
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Checkbox from "expo-checkbox"
import DropDownPicker from "react-native-dropdown-picker"
import * as ImagePicker from "expo-image-picker"
import * as yup from "yup"
import { Picker } from "@react-native-picker/picker"
import { Formik, Form } from "formik"
import { addCarDetials } from "../../store/services/Bidding"
import { useDispatch, useSelector } from "react-redux"
import { driverCarAdded } from "../../store/slices/biddingSlice"
import { pickImage } from "../../store/helpers/pickImage"
const AddCarDetails = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const carAdded = useSelector(driverCarAdded)

  const validationSchema = yup.object().shape({
    numberPlate: yup.string().required(" Required"),
    carImages: yup.string().required(" Required"),
  })

  if (carAdded) {
    navigation.navigate("Home")
  }
  return (
    <View style={styles.mainBody}>
      <Formik
        initialValues={{
          numberPlate: "",
          ac: true,
          seats: 4,
          baggage: 4,
          carType: "Economy",
          carImages: "",
          vehicalName: "",
        }}
        onSubmit={(values) => dispatch(addCarDetials(values))}
        validationSchema={validationSchema}
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
            <View
              style={{
                ...styles.SectionStyle,
                display: "flex",
                flexDirection: "column",
                height: 70,
              }}
            >
              <TextInput
                style={styles.inputStyle}
                placeholder="Vehical Registration Number(Number Plate)"
                placeholderTextColor="#8b9cb5"
                onChangeText={handleChange("numberPlate")}
                value={values.numberPlate}
              />
              {touched.numberPlate && errors.numberPlate ? (
                <Text style={{ color: "red" }}>{errors.numberPlate}</Text>
              ) : null}
            </View>
            <View
              style={{
                ...styles.SectionStyle,
                display: "flex",
                flexDirection: "column",
                height: 70,
              }}
            >
              <TextInput
                style={styles.inputStyle}
                placeholder="Vehical Registration Number(Number Plate)"
                placeholderTextColor="#8b9cb5"
                onChangeText={handleChange("vehicalName")}
                value={values.vehicalName}
              />
              {touched.vehicalName && errors.vehicalName ? (
                <Text style={{ color: "red" }}>{errors.vehicalName}</Text>
              ) : null}
            </View>
            <View style={styles.SectionStyle}>
              <Picker
                style={styles.defaultPicker}
                selectedValue={values.seats}
                onValueChange={(nextValue) =>
                  setFieldValue("carType", nextValue)
                }
                placeholder="Select Number of Seats"
              >
                <Picker.Item label="Select Number of Seats" value="" />
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <Picker.Item label={`${value}`} value={value} />
                ))}
              </Picker>
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
                <Picker.Item label="Select a Car Type" value="" />
                <Picker.Item label="Executive" value="Executive" />
                <Picker.Item label="Economy Plus" value="EconomyPlus" />
                <Picker.Item label="Economy" value="Economy" />
              </Picker>
            </View>
            <View style={styles.SectionStyle}>
              <Picker
                style={styles.defaultPicker}
                selectedValue={values.baggage}
                onValueChange={(nextValue) =>
                  setFieldValue("baggage", nextValue)
                }
                placeholder="Select Baggages"
              >
                <Picker.Item label="Select Baggages" value="" />
                {[1, 2, 3, 4, 5, 6].map((value) => (
                  <Picker.Item label={`${value}`} value={value} />
                ))}
              </Picker>
            </View>
            <View style={styles.section}>
              <Checkbox
                type={"checkbox"}
                onValueChange={() => setFieldValue("ac", !values.ac)}
                value={values.ac}
                style={{ color: "#09A391", margin: 15 }}
              />

              <Text>AC available</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.uploadButtonStyle}
                activeOpacity={0.5}
                onPress={async () =>
                  setFieldValue("carImages", await pickImage())
                }
              >
                <Text style={styles.uploadButtonTextStyle}>
                  Upload Car Pictures
                </Text>
              </TouchableOpacity>
              {values.carImages ? (
                <Text sx={{ textAlign: "center" }}>{"Uploaded"}</Text>
              ) : null}
              {touched.carImages && errors.carImages ? (
                <Text style={{ color: "red" }}>{errors.carImages}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                handleSubmit()
              }}

              // navigation.navigate("Home")
            >
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  )
}

export default AddCarDetails

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
})
