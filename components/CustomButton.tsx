import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  handlePress: () => void;
  containerStyles?: string;
  title: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary  rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {!isLoading && (
        <Text className={`text-primary font-popSemi  text-lg ${textStyles}`}>
          {title}
        </Text>
      )}
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2 justify-center text-center"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
