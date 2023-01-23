import React from "react";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import BackButton from "../components/BackButton";
import Checkbox from "../components/Checkbox";
import { api } from "../lib/axios";

const avaliableWeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const New: React.FC = () => {
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [title, setTitle] = useState("");

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreateNewHabit() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        return;
      }

      await api.post("habits", {
        title,
        weekDays,
      });

      setTitle("");
      setWeekDays([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Create Habit
        </Text>
        <Text className="mt-6 text-white font-semibold text-base">
          What do you want to conquer?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white border-2 border-zinc-800  focus:border-green-600"
          placeholder="ex.: Exercize, read 20 pages of a book..."
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
        />

        <Text className="mt-4 mb-3 text-white font-semibold text-base">
          What's the recurrence?
        </Text>

        {avaliableWeekDays.map((weekDay, i) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(i)}
            onPress={() => handleToggleWeekDay(i)}
          />
        ))}

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          onPress={handleCreateNewHabit}
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirm
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default New;
