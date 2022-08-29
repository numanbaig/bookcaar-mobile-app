import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Dashboard from "../screen/dashboard"
import Rating from "../screen/rating"
import Insurance from "../screen/insurance"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import Income from "../screen/income"
import RideRequests from "../screen/rideRequests"
const Tab = createBottomTabNavigator()

const DashboardRoutes = (props) => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#09A391",
        tabBarInactiveTintColor: "#ADADB7",
        tabBarLabelStyle: {
          margin: 3,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "Dashboard",

          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          title: "Income",

          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="piano" color={color} size={20} />
          ),
        }}
        name="income"
        component={RideRequests}
      />
      <Tab.Screen
        options={{
          title: "Rating",

          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={20} />
          ),
        }}
        name="rating"
        component={Rating}
      />
      <Tab.Screen
        options={{
          //   tabBarLabel: () => {
          //     return null;
          //   },
          headerShown: false,
          title: "Insurance",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="piano" color={color} size={20} />
          ),
        }}
        name="insurance"
        component={Insurance}
      />
    </Tab.Navigator>
  )
}

export default DashboardRoutes
