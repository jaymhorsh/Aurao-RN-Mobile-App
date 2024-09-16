
import { View, Text, Image, Modal } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "./CustomButton";

interface Props {
  showModal: boolean;
  handleDone: () => void;
  title: string;
  text: string;
  btnTitle?: string;
}
const CustomModal = ({
  showModal,
  handleDone,
  title,
  text,
  btnTitle,
}: Props) => (
  <Modal visible={showModal} animationType="slide" transparent={true}>
    <View className="flex-1 justify-center items-center ">
      <View className="bg-white px-5 py-4  rounded-2xl min-h-[300px] w-[90%]">
        <View className="flex justify-center my-3 items-center">
          <Ionicons
            name="checkmark-circle-outline"
            size={100}
            color="#FF9C01"
            className="mx-auto "
          />
        </View>

        <Text className="text-2xl text-center font-StratosMedium">{title}</Text>
        <Text className="text-base text-gray-400 font-Stratos-Light text-center mt-2">
          {text}
        </Text>
        <View className="p-4">
          <View className="flex justify-center items-center">
            <CustomButton
              title={btnTitle}
              handlePress={handleDone}
              isLoading={false}
            />
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

export default CustomModal;
