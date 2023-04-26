import React from "react";
import { View, StyleSheet, Text } from "react-native";

function FriendDetails({ route }) {
  const friend = route.params;
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.content}>ID :{friend.Id}</Text>
      <Text style={styles.content}>Name :{friend.Name}</Text>
      <Text style={styles.content}>
        Full Name :{friend.First_Name__c + " " + friend.Last_Name__c}
      </Text>
      <Text style={styles.content}>
        Age :{friend.Age__c ? friend.Age__c : "N/A"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  content: {
    padding: 10,
  },
});

export default FriendDetails;
