import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://rnapp-mock-developer-edition.ap24.force.com/services",
  //https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice
});

export default apiClient;
