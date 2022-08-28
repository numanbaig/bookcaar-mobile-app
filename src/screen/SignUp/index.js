import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native"
import React, { useState, useCallback } from "react"
import { useNavigation } from "@react-navigation/native"
import { FontAwesome5 } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { createUserWithEmail } from "../../store/services/Auth"
import { useDispatch } from "react-redux"
import { auth } from "../../store"
const SignUp = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmitRegistration = () => {
    console.log("asdasd")
    dispatch(createUserWithEmail({ email, password }))
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.cancelled) {
      setBool(true)
      setImage(result.uri)
    }
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{ backgroundColor: "white", flex: 1 }}
      >
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.imageComponent} onPress={pickImage}>
            <Image
              style={{ height: 100, width: 100, borderRadius: 200 }}
              source={require("../../../assets/user.jpg")}
            />
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
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Phone Number</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Phone Number"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => handleSubmitRegistration()}
      >
        <Text style={styles.buttonTextStyle}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

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
})
