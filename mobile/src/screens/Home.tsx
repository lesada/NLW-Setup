import React, { useEffect, useState } from "react";

import { Text, View, ScrollView } from "react-native";

import Header from "../components/Header";
import HabitDay, { daySize } from "../components/HabitDay";
import { api } from "../lib/axios";
import { datesFromYearBeggining } from "../utils/datesFromYearBeggining";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import dayjs from "dayjs";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
const datesFromYearStart = datesFromYearBeggining();

const minimumSummaryDates = 18 * 5;
const amountOfDaysToFill = minimumSummaryDates - datesFromYearStart.length;

type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get("summary");
      setSummary(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16 ">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => {
          return (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-lg font-bold text-center mx-1"
              style={{ width: daySize, height: daySize }}
            >
              {weekDay}
            </Text>
          );
        })}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {summary && (
          <View className="flex-row flex-wrap">
            {datesFromYearStart.map((date) => {
              const dayWithHabits = summary.find((day) => {
                return dayjs(date).isSame(day.date, "day");
              });

              return (
                <HabitDay
                  key={date.toISOString()}
                  date={date}
                  amount={dayWithHabits?.amount}
                  completed={dayWithHabits?.completed}
                  onPress={() =>
                    navigate("habit", { date: date.toISOString() })
                  }
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
