import apiClient from "./client";

const endPoint = "/apexrest/apiservice";

const getFriends = () => apiClient.get(endPoint);

const addFriends = (friends) => {
  return apiClient.post(endPoint, friends);
};

export default { getFriends, addFriends };
