import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appwrite";
import CustomErrorModal from "@/components/CustomErrorModal";
import CustomModal from "@/components/CustomModal";
const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await signIn({
        email: form.email,
        password: form.password,
      });
      setShowSuccessModal(true);
      router.replace("/(tabs)/home");
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    } catch (error: any) {
      setErrorMessage(error.message);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center items-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[112px] h-[32]"
          />
          <Text className="text-2xl font-popSemi mt-10 text-white">
            Log in to Aurao
          </Text>

          <FormField
            label="Email"
            placeholder="Enter Your Email Address"
            value={form.email}
            onChangeText={(email: string) =>
              setForm({
                ...form,
                email,
              })
            }
            otherStyles="mt-7"
            inputStyles="text-white"
            keyboardType="email-address"
            secureTextEntry={false}
          />

          <FormField
            label="Password"
            value={form.password}
            placeholder="Password"
            onChangeText={(password: string) =>
              setForm({
                ...form,
                password,
              })
            }
            otherStyles="mt-7"
            inputStyles="text-white"
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
            icon={secureTextEntry ? icons.eye : icons.eyeHide}
          />
          <CustomButton
            title="Sign In"
            containerStyles="w-full mt-7"
            isLoading={loading}
            handlePress={handleSubmit}
          />
          <View className="justify-center pt-5 gap-2 flex-row">
            <Text className="font-popReg text-lg text-gray-100">
              Dont have account ?
            </Text>
            <Link
              href="/(auth)/sign-up"
              className="text-secondary font-popSemi text-lg"
            >
              Sign Up
            </Link>
          </View>
          <CustomErrorModal
            showModal={showErrorModal}
            btnTitle="Close"
            handleDone={() => setShowErrorModal(false)}
            text={errorMessage}
            title="Failed"
          />
          <CustomModal
            showModal={showSuccessModal}
            handleDone={() => setShowSuccessModal(false)}
            title="Login Successful"
            text={"User has been successfuly logged in "}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
