import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import FriendDetails from "../components/friends/FriendsDetails";
import FriendsList from "../components/friends/FriendsList";
import AddNewFriend from "../components/friends/AddFriend";

const Stack = createNativeStackNavigator();

const FriendNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.FRIENDS}
        component={FriendsList}
        options={{
          title: "Friends",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.FRIEND_DETAILS}
        component={FriendDetails}
        options={{
          title: "Friend Details",
        }}
      />
      <Stack.Screen
        name={routes.ADD_NEW_FRIEND}
        component={AddNewFriend}
        options={{
          title: "Add New Friend",
        }}
      />
    </Stack.Navigator>
  );
};

export default FriendNavigator;
