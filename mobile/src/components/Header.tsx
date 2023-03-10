import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/logo.svg";

const Header: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View className="w-fulll flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        className="flex-row items-center h-11 px-4 border border-violet-500 rounded-lg"
        onPress={() => navigate("new")}
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />
        <Text className="text-white ml-3 font-semibold text-base">New</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
