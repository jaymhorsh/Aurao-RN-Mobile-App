import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="bg-whit  w-full justify-center items-center h-full px-4">
          <Image source={images.logo} className={'w-32 h-[5.3rem]'} resizeMode="contain" alt="Logo" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
