import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

interface Props extends TextInputProps {
  label: string;
  icon?: any;
  placeholder?: string;
  otherStyles?: string;
  inputStyles?: string;
  secureTextEntry: boolean;
  setSecureTextEntry?: (value: boolean) => void;
}
const FormField = ({
  icon,
  label,
  placeholder,
  secureTextEntry =false,
  setSecureTextEntry,
  otherStyles,
  inputStyles,
  ...props
}: Props) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="font-popReg text-base text-gray-100">{label}</Text>
      <View className="border-2 border-black-200 w-full flex-row h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center ">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className={`w-full px-2 py-2 text-base flex-1 font-StratosMedium ${inputStyles}`}
          secureTextEntry={secureTextEntry}
          {...props}
        />

        {icon && (
          <TouchableOpacity
            onPress={() =>
              setSecureTextEntry && setSecureTextEntry(!secureTextEntry)
            }
          >
            <Image source={icon} className="w-6 h-6 text  ml-4" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
