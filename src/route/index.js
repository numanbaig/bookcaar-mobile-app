import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bidding from "../screen/bidding";
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
          name="Home"
          children={() => <DrawerRoutes />}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
