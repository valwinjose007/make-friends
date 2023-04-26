import React, { useRef } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import friendsApi from "../../api/friends";
import useApi from "../../hooks/useApi";
import routes from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";

function AddNewFriend() {
  const navigation = useNavigation();
  const postFirendsListApi = useApi(friendsApi.addFriends);
  const nameRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const ageRef = useRef(0);

  const AddFriend = async () => {
    const payload = [
      {
        attributes: {
          type: "Friend__c",
        },
        Name: nameRef.current.value,
        First_Name__c: firstNameRef.current.value,
        Last_Name__c: lastNameRef.current.value,
        Age__c: ageRef.current.value,
      },
    ];
    await postFirendsListApi.request(payload);
    if (postFirendsListApi.error == false) {
      alert("Friend added successfully.");
      navigation.navigate(routes.FRIENDS);
    } else alert("Something Went wrong!");
  };

  return (
    <View style={styles.detailsContainer}>
      {postFirendsListApi.loading && <Text>Processing. Plz wait...</Text>}
      <TextInput
        placeholder="Name"
        maxLength={25}
        style={{ padding: 20 }}
        ref={nameRef}
        onChangeText={(text) => (nameRef.current.value = text)}
      />
      <TextInput
        placeholder="First Name"
        maxLength={25}
        style={{ padding: 20 }}
        ref={firstNameRef}
        onChangeText={(text) => (firstNameRef.current.value = text)}
      />
      <TextInput
        placeholder="Last Name"
        maxLength={25}
        style={{ padding: 20 }}
        ref={lastNameRef}
        onChangeText={(text) => (lastNameRef.current.value = text)}
      />
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={{ padding: 20 }}
        maxLength={3}
        ref={ageRef}
        onChangeText={(text) => (ageRef.current.value = text)}
      />
      <Button
        onPress={AddFriend}
        title="Add Friend"
        disabled={postFirendsListApi.loading}
      >
        Add Friend
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
});

export default AddNewFriend;
