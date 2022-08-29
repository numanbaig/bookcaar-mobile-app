import React, { useState, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Maps = () => {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = "…";
  return (
    <MapView initialRegion={destination}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey="AIzaSyAB_9gv95tthsqqFyrTzsq0ACRnJ2zNlvs"
      />
    </MapView>
  );
};

export default Maps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: 200,
  },
});
