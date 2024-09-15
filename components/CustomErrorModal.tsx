import { View, Text, Image, Modal } from "react-native";
import CustomButton from "./CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
  showModal: boolean;
  handleDone: () => void;
  title: string;
  text: string;
  btnTitle: string;
}
const CustomErrorModal = ({
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
          <MaterialIcons
            name="cancel"
            size={100}
            color={"#EB3134"}
            className="mx-auto"
          />
        </View>
        <Text className="text-xl text-center font-popMed ">{title}</Text>
        <Text className="text-base text-gray-400 font-popMed text-center mt-2">
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
export default CustomErrorModal;
