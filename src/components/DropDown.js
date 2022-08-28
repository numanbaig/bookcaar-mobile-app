import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const DropDown = ({
  defaultValue,
  label,
  placeholder,
  onChangeItem,
  seatOpen,
  setSeatOpen,
}) => {
  return (
    <View marginVertical={10}>
      <Text>{label ? label : ""}</Text>
      <DropDownPicker
        open={seatOpen}
        setOpen={setSeatOpen}
        items={[
          { label: "English", value: "en" },
          { label: "Deutsch", value: "de" },
          { label: "French", value: "fr" },
        ]}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeItem={onChangeItem}
        searchContainerStyle={{
          borderBottomColor: "black",
        }}
        searchTextInputStyle={{
          color: "black",
        }}
        placeholderStyle={styles.placeholderStyle}
        searchPlaceholderTextColor={"black"}
        labelStyle={{ color: "black" }}
        containerStyle={styles.containerStyle}
        dropDownStyle={[
          styles.dropDownStyle,
          {
            backgroundColor: "transparent",
            borderColor: "black",
          },
        ]}
        itemStyle={styles.itemStyle}
        style={{
          backgroundColor: "transparent",
          borderColor: "orange",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 45,
    width: "100%",
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  dropDownStyle: {
    borderWidth: 1,
  },
  placeholderStyle: {
    color: "#808080",
  },
});
