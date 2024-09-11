import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "@/constants";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(false);
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
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
