import { StyleSheet, View, Text, Modal } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
import React from "react";
const Income = () => {
  return (
    <View style={styles.surface}>
      {data.map((e, index) => {
        return (
          <Card key={index} style={{ marginTop: 10, flex: 1 }}>
            <Card.Content>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.date}>Income</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.titleText}>Rides Completed:</Text>
                <Text style={styles.valueText}>{e.ridesCompleted}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.titleText}>Total Amount:</Text>
                <Text style={styles.valueText}>{e.totalAmount}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.titleText}>Bonus Earned:</Text>
                <Text style={styles.valueText}>{e.bonusEarned}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.duesTitleText}>Dues Remaining:</Text>
                <Text style={styles.duesValueText}>{e.duesRemaning}</Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Text style={styles.profitTitleText}>Profit Amount (Rs):</Text>
                <Text style={styles.profitValueText}>{e.profitAmount}</Text>
              </View>
            </Card.Content>
          </Card>
        );
      })}
    </View>
  );
};

export default Income;

const styles = StyleSheet.create({
  surface: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    width: 220,
  },
  valueText: {
    fontSize: 16,
    color: "black",
  },
  profitTitleText: {
    fontSize: 18,
    color: "#09A391",
    width: 220,
    fontWeight: "bold",
  },
  profitValueText: {
    color: "#09A391",
    fontSize: 18,
    fontWeight: "bold",
    width: 220,
  },
  duesTitleText: {
    fontSize: 16,
    width: 220,
    fontWeight: "100",
  },
  duesValueText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    width: 220,
  },
  date: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    paddingVertical: 16,
  },
});

const data = [
  {
    ridesCompleted: "20",
    totalAmount: "5000",
    bonusEarned: "500",
    duesRemaning: "1000",
    profitAmount: "10000",
  },
];
