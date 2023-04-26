import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useApi from "../../hooks/useApi";
import friendsApi from "../../api/friends";
import ListItem from "../list/ListItem";
import colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import routes from "../../navigation/routes";

const FriendsList = ({}) => {
  const navigation = useNavigation();
  const getFirendsListApi = useApi(friendsApi.getFriends);

  useEffect(() => {
    getFirendsListApi.request();
  }, []);

  return (
    <SafeAreaView>
      <View>{getFirendsListApi.loading && <Text>loading....</Text>}</View>
      {getFirendsListApi.data && (
        <FlatList
          data={getFirendsListApi.data}
          keyExtractor={(list) => list.Id.toString()}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          renderItem={({ item }) => (
            <ListItem
              key={item.Id}
              tittle={item.First_Name__c + " " + item.Last_Name__c}
              onPress={() => navigation.navigate(routes.FRIEND_DETAILS, item)}
              subTittle={"Age: " + (item.Age__c ? item.Age__c : "N/A")}
            />
          )}
        ></FlatList>
      )}
      {!getFirendsListApi.loading && (
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "red",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            position: "absolute",
            right: 20,
            bottom: 40,
            height: 50,
            backgroundColor: "red",
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate(routes.ADD_NEW_FRIEND)}
        >
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            +
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default FriendsList;
