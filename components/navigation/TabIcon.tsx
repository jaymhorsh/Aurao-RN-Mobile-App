import { View, Text, Image } from "react-native";

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};
export const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2 ">
      <Image
        source={icon}
        resizeMode={"contain"}
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-popSemi" : "font-popReg"} text-xs `}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
