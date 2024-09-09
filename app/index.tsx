import {Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className= 'bg-white flex-1 items-center justify-center'>
      <Text className='text-3xl text-primary font-popBold'>Aurao! App </Text>
      <StatusBar style="auto" />
      <Link href={'/(auth)/sign-in'} className="text-green-600  font-popBold">Go to profile</Link>
    </View>
  );
};
export default App;