import clsx from "clsx";
import dayjs from "dayjs";
import React from "react";
import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";
import { generateProgressPercentage } from "../utils/generateProgressPercentage";

const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const dayMarginBetween = 8;

export const daySize =
  Dimensions.get("screen").width / weekDays - (screenHorizontalPadding + 5);

interface HabitDayProps extends TouchableOpacityProps {
  date: Date;
  completed?: number;
  amount?: number;
}

function HabitDay({ date, completed = 0, amount = 0, ...rest }: HabitDayProps) {
  const completedPercentage =
    amount > 0 ? generateProgressPercentage(completed, amount) : 0;

  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
      className={clsx("rounded-lg border-2 m-1", {
        "bg-zinc-900 border-zinc-800": completedPercentage === 0,
        "bg-violet-900 border-violet-700":
          completedPercentage > 0 && completedPercentage < 20,
        "bg-violet-800 border-violet-600":
          completedPercentage >= 20 && completedPercentage < 40,
        "bg-violet-700 border-violet-500":
          completedPercentage >= 40 && completedPercentage < 60,
        "bg-violet-600 border-violet-400":
          completedPercentage >= 60 && completedPercentage < 80,
        "bg-violet-500 border-violet-400":
          completedPercentage >= 80 && completedPercentage < 100,
        "bg-violet-400 border-violet-300": completedPercentage === 100,
        ["border-white border-4"]: isCurrentDay,
      })}
      style={{ width: daySize, height: daySize }}
      {...rest}
    />
  );
}

export default HabitDay;
