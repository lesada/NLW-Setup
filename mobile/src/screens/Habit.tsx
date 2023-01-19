import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import dayjs from "dayjs";

import BackButton from "../components/BackButton";
import Checkbox from "../components/Checkbox";
import ProgressBar from "../components/ProgressBar";

interface Params {
  date: string;
}

const Habit: React.FC = () => {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const monthAndDay = parsedDate.format("MM/DD");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {monthAndDay}
        </Text>

        <ProgressBar progress={30} />

        <View className="mt-6">
          <Checkbox title="Drink Water" checked={false} />

          <Checkbox title="Walk a mile" checked />
        </View>
      </ScrollView>
    </View>
  );
};

export default Habit;
