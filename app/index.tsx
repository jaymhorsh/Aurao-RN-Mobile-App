import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className={"w-32 h-[5.3rem]"}
            resizeMode="contain"
            alt="Logo"
          />
          <Image
            source={images.cards}
            className="max-w-sm w-full h-80"
            resizeMode="contain"
          />

          <View className="mt-5 relative">
            <Text className="text-3xl text-white capitalize  font-popBold text-center">
              discover endless possibilities with
              <Text className="text-secondary-200"> Aurao</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="w-[100px] h-[25px] -right-6 absolute -bottom-3"
            />
          </View>

          <Text className="text-gray-100 text-sm mt-7 font-popReg text-center">
            When creativity and innovation, explore a journey of limitless
            exploration with Aurao
          </Text>
          <CustomButton
            handlePress={() => router.push("/sign-in")}
            containerStyles="mt-7 w-full  "
            isLoading={false}
            title="Continue With Email"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};
export default App;
