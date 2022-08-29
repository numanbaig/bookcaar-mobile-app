import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Dashboard from "../screen/dashboard"
import Rating from "../screen/rating"
import Insurance from "../screen/insurance"
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons"
import Income from "../screen/income"
import Ride from "../screen/ride"
import RideRequests from "../screen/RideRequests"
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
          title: "Ride",

          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="car" color={color} size={20} />
          ),
        }}
        name="ride"
        component={Ride}
      />
      <Tab.Screen
        options={{
          title: "Ride Request",

          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-git-pull-request-outline"
              color={color}
              size={20}
            />
          ),
        }}
        name="riderequest"
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
            <FontAwesome5 name="car-crash" color={color} size={20} />
          ),
        }}
        name="insurance"
        component={Insurance}
      />
    </Tab.Navigator>
  )
}

export default DashboardRoutes
