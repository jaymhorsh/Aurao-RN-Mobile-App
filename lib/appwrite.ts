import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";
import { LoginPayload, RegisterPayload } from "./api/auth";
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
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async ({
  email,
  password,
  username,
}: RegisterPayload) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error();
    const avatarUrl = avatars.getInitials(username);

    // call signin function
    await signIn({ email, password });
    // Create the sined in user in the database
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// SignIn Function
export async function signIn({ email, password }: LoginPayload) {
  try {
    // appwrite signIn method
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
