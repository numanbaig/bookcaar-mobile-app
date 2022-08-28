import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Formik, Form } from "formik";
const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const navigation = useNavigation();

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {};
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={loginValidationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <KeyboardAvoidingView enabled>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/appLogo.png")}
                    style={{
                      resizeMode: "contain",
                      height: 200,
                    }}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    style={styles.inputStyle}
                    placeholder="Enter Email"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    // onSubmitEditing={() =>
                    //   passwordInputRef.current &&
                    //   passwordInputRef.current.focus()
                    // }
                    underlineColorAndroid="#f000"
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View style={styles.SectionStyle}>
                  <TextInput
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    style={styles.inputStyle}
                    placeholder="Enter Password" //12345
                    placeholderTextColor="#8b9cb5"
                    keyboardType="default"
                    ref={passwordInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    secureTextEntry={true}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmit}

                  // navigation.navigate("Home")
                >
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
                <Text
                  style={styles.registerTextStyle}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  New here ? Register
                </Text>
              </KeyboardAvoidingView>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "whites",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "column",
    height: 60,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    margin: 5,
  },
  buttonStyle: {
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
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
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
  },
  registerTextStyle: {
    color: "#09A391",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
