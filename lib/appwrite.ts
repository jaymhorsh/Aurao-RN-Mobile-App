import { Client, Account, ID } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jaymhorsh.aurao",
  projectId: "66c5e03a001d086dbbdf",
  databaseId: "66e1ce45002d32adab34",
  userCollectionId: "66e1ceaa0024ba284809",
  videoCollectionId: "66e1cfba00271ed8d5ca",
  storageID: "66e1d52e0004b00fdb63",
};

// Init your React Native SDK
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform); // YOUR application ID

// Register User
const account = new Account(client);
export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
