import React from "react";
import dashboardRoutes from "./dashboardRoutes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={dashboardRoutes}
      />
      <Drawer.Screen name="dashboard" children={() => <drawer />} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
