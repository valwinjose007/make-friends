import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyPage = () => {
  return (
    <View style={styles.container}>
      <Text>Added Soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EmptyPage;
