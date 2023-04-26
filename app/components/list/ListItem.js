import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function ListItem({ tittle, subTittle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.tittle} numberOfLines={1}>
            {tittle}
          </Text>
          {subTittle && (
            <Text style={styles.subTittle} numberOfLines={2}>
              {subTittle}
            </Text>
          )}
        </View>
        <MaterialCommunityIcons
          style={styles.subTittle}
          color={colors.medium}
          name="chevron-right"
          size={25}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "60%",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  detailsContainer: {
    //flex: 1,
    marginLeft: 10,
    //justifyContent: "center",
  },
  tittle: {
    fontWeight: "500",
  },
  subTittle: {
    color: colors.medium,
    paddingVertical: 2,
  },
});

export default ListItem;
