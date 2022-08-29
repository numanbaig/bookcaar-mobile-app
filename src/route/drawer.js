import React from "react"
import dashboardRoutes from "./dashboardRoutes"
import { createDrawerNavigator } from "@react-navigation/drawer"
import DrawerContent from "../components/CustomDrawer"
import { useSelector } from "react-redux"
import { currentUser } from "../store/slices/userSlice"
import { useNavigation } from "@react-navigation/native"
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const navigation = useNavigation()
  const user = useSelector(currentUser)
  if (!user) {
    navigation.replace("SignIn")
  }
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={dashboardRoutes}
      />
      {/* <Drawer.Screen name="dashboard" children={() => <drawer />} /> */}
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
