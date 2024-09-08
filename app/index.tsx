import {Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className= 'bg-white flex-1 items-center justify-center'>
      <Text className='text-5xl text-primary  font-poppins font-black'>Aura App </Text>
      <StatusBar style="auto" />
      <Link href={'/profile'} className="text-green-600">Go to profile</Link>
    </View>
  );
};
export default App;