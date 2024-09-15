import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  handlePress: () => void;
  containerStyles?: string;
  title: string;
  textStyles?: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  width,
  height,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? (null as any) : handlePress}
      activeOpacity={isLoading ? 1 : 0.7}
      style={{ width: width || "100%", height: height || 62 } as any}
      className={`bg-secondary  rounded-xl  flex flex-row justify-center items-center ${containerStyles}
       ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size={30}
          className="ml-2 justify-center text-center"
        />
      ) : (
        <Text className={`text-primary font-popSemi  text-lg ${textStyles}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
