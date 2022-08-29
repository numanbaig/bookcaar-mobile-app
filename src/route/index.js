import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddCarDetails from "../screen/addcardetails";
import Bidding from "../screen/bidding";
import EditImage from "../screen/editImage";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import Splash from "../screen/Splash";
import DrawerRoutes from "./drawer";
const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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
  );
};

export default Route;
