import { useEffect } from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddCarDetails from "../screen/addcardetails"
import Bidding from "../screen/bidding"
import EditImage from "../screen/editImage"
import SignIn from "../screen/SignIn"
import SignUp from "../screen/SignUp"
import Splash from "../screen/Splash"
import DrawerRoutes from "./drawer"
import { getCurrentUser } from "../store/services/Auth"
import { useDispatch, useSelector } from "react-redux"
import Income from "../screen/income"
import AddCar from "../screen/addCar"
import RideDetail from "../screen/ridedetails/rideDetail"
import { appLoading, toggleAppLoading } from "../store/slices/userSlice"
import { Modal, Portal, Provider } from "react-native-paper"
const Stack = createNativeStackNavigator()
const Route = () => {
  const dispatch = useDispatch()
  const loading = useSelector(appLoading)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Bidding"
          component={Bidding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCarDetails"
          component={AddCarDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RideDetail"
          component={RideDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="income"
          component={Income}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addcar"
          component={AddCar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditImage"
          component={EditImage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          children={() => <DrawerRoutes />}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
