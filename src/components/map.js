import React, { useState, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const Maps = ({ activeRides }) => {
  // const [coordinates] = useState([
  // {
  //   latitude: activeRides[0]?.pickUpCoordinates?.lat,
  //   longitude: activeRides[0]?.pickUpCoordinates?.lng,
  // },
  //   {
  // latitude: activeRides[0]?.dropOfCoordinates?.lat,
  // longitude: activeRides[0]?.dropOfCoordinates?.lng,
  //   },
  // ]);
  console.log(
    activeRides[0]?.pickUpCoordinates,
    "activeRides[0]?.pickUpCoordinates?"
  );
  console.log(
    activeRides[0]?.dropOfCoordinates,
    "activeRides[0]?.dropOfCoordinates"
  );
  let originData = {
    latitude: activeRides[0]?.pickUpCoordinates?.lat,
    longitude: activeRides[0]?.pickUpCoordinates?.lng,
  };
  let destinationnData = {
    latitude: activeRides[0]?.dropOfCoordinates?.lat,
    longitude: activeRides[0]?.dropOfCoordinates?.lng,
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: activeRides[0]?.pickUpCoordinates?.lat,
          longitude: activeRides[0]?.pickUpCoordinates?.lng,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={originData}
          destination={destinationnData}
          apikey={"AIzaSyAB_9gv95tthsqqFyrTzsq0ACRnJ2zNlvs"}
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={originData} />
        <Marker coordinate={destinationnData} />
      </MapView>
    </View>
  );
};

export default Maps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapStyle: {},
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
