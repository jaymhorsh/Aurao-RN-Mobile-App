import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createUser } from "@/lib/appwrite";
import CustomErrorModal from "@/components/CustomErrorModal";
import CustomModal from "@/components/CustomModal";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async () => {
    console.log(form);
    if (
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Your password and confirm password do not match");
      setShowErrorModal(true); // Trigger modal to show
      return; // Stop further execution
    }

    setLoading(true);
    try {
      const result = await createUser({
        email: form.email,
        username: form.username,
        password: form.password,
      });
      console.log(result);
      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
      // set to global state using context
      router.replace("/(tabs)/home");
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
        <View className="w-full min-h-[90vh] justify-center items-center px-4 my-10">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[112px] h-[32]"
          />
          <Text className="text-2xl font-popSemi mt-10 text-white">
            Sign Up to Aurao
          </Text>
          {/* Custom Input Field */}
          <FormField
            label="Username"
            placeholder="Enter Your Email Address"
            value={form.username}
            onChangeText={(username: string) =>
              setForm({
                ...form,
                username,
              })
            }
            otherStyles="mt-7"
            inputStyles="text-white"
            keyboardType="email-address"
            secureTextEntry={true}
          />
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
            secureTextEntry={true}
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
            icon={secureTextEntry ? icons.eyeHide : icons.eye}
          />
          <FormField
            label="Confirm Password"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChangeText={(confirmPassword: string) =>
              setForm({
                ...form,
                confirmPassword,
              })
            }
            otherStyles="mt-7"
            inputStyles="text-white"
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
            icon={secureTextEntry ? icons.eyeHide : icons.eye}
          />
          {/* Custom Custom Button */}
          <CustomButton
            title="Sign Up"
            containerStyles="w-full mt-7"
            isLoading={loading}
            handlePress={handleSubmit}
          />
          <View className="justify-center pt-5 gap-2 flex-row">
            <Text className="font-popReg text-lg text-gray-100">
              Dont have account ?
            </Text>
            <Link
              href="/(auth)/sign-in"
              className="text-secondary font-popSemi text-lg"
            >
              Sign In
            </Link>
          </View>
        </View>
        <CustomErrorModal
          showModal={showErrorModal}
          btnTitle="Close"
          handleDone={() => setShowErrorModal(false)}
          text={errorMessage}
          title="Registration Failed"
        />
        <CustomModal
          showModal={showSuccessModal}
          handleDone={() => setShowSuccessModal(false)}
          title="Registration Successful"
          text={"User account has been successfuly created "}
        />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;
