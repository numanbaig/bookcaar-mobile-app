import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createUserWithEmail } from "../../store/services/Auth";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import { pickImage } from "../../store/helpers/pickImage";
import { currentUser, signUpState } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  password: Yup.string()
    .min(8, () => `Password must be at least 8 characters`)
    .required("Password is required"),
  cnic: Yup.string()
    .max(13, "Must be 13 Numbers")
    .min(13, "Must be 13 Numbers")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(13, "to long"),
  cnicImage: Yup.string().required("required"),
});

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  const isSignUpLoading = useSelector(signUpState);
  const [galleryPermission, setGalleryPermission] = useState(false);

  const permisionFunction = async () => {
    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();

    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };
  useEffect(() => {
    permisionFunction();
  }, []);

  if (user) {
    navigation.navigate("Home");
  }

  return (
    <>
      <Formik
        initialValues={{
          profileImage: "",
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          cnic: "",
          cnicImage: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createUserWithEmail(values));
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          values,
          setFieldValue,
          isSubmitting,
        }) => (
          <View style={{ backgroundColor: "white", flex: 1 }}>
            {console.log("ee", errors)}
            {console.log("v", values)}
            <ScrollView
              nestedScrollEnabled={true}
              style={{ backgroundColor: "white", flex: 1 }}
            >
              <View style={styles.innerContainer}>
                <TouchableOpacity
                  style={styles.imageComponent}
                  onPress={async () =>
                    setFieldValue("profileImage", (await pickImage()) || "")
                  }
                >
                  {!values.profileImage ? (
                    <Image
                      style={{ height: 100, width: 100, borderRadius: 200 }}
                      source={require("../../../assets/user.jpg")}
                    />
                  ) : (
                    <Image
                      style={{ height: 100, width: 100, borderRadius: 200 }}
                      source={{
                        uri: values.profileImage,
                      }}
                    />
                  )}

                  <View style={styles.add}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name="user-edit"
                        width={20}
                        height={20}
                        fill="#111"
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                  <Text>Name</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    onChangeText={handleChange("name")}
                    value={values.name}
                  />
                  {touched.name && errors.name ? (
                    <Text style={{ color: "red" }}>{errors.name}</Text>
                  ) : null}
                </View>
                <View style={styles.inputContainer}>
                  <Text>Email</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    onChangeText={handleChange("email")}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                  ) : null}
                </View>
                <View style={styles.inputContainer}>
                  <Text>Password</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                  ) : null}
                </View>
                <View style={styles.inputContainer}>
                  <Text>Phone Number</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Phone Number"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    onChangeText={handleChange("phoneNumber")}
                    value={values.phoneNumber}
                  />
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
                  ) : null}
                </View>
                <View style={styles.inputContainer}>
                  <Text>CNIC</Text>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="CNIC"
                    placeholderTextColor="#8b9cb5"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                    onChangeText={handleChange("cnic")}
                    value={values.cnic}
                  />
                  {touched.cnic && errors.cnic ? (
                    <Text style={{ color: "red" }}>{errors.cnic}</Text>
                  ) : null}
                </View>
                <View style={{ ...styles.inputContainer, marginTop: 20 }}>
                  <TouchableOpacity
                    style={styles.uploadButtonStyle}
                    activeOpacity={0.5}
                    onPress={async () => {
                      setFieldValue("cnicImage", (await pickImage()) || "");
                    }}
                  >
                    <Text style={styles.uploadButtonTextStyle}>
                      Upload CNIC
                    </Text>
                  </TouchableOpacity>
                  {values.cnicImage ? (
                    <Text sx={{ textAlign: "center" }}>{"Uploaded"}</Text>
                  ) : null}
                  {touched.cnicImage && errors.cnicImage ? (
                    <Text style={{ color: "red" }}>{errors.cnicImage}</Text>
                  ) : null}
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              disabled={isSignUpLoading}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    margin: 20,
    marginTop: 50,
    marginBottom: 80,
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
  uploadButtonStyle: {
    backgroundColor: "white",
    borderWidth: 0,
    borderColor: "#09A391",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 15,
  },
  uploadButtonTextStyle: {
    color: "black",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#09A391",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#09A391",
    height: 50,
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    margin: 5,
  },
});
