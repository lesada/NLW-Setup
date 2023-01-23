import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import dayjs from "dayjs";
import { datesFromYearBeginning } from "../utils/datesFromYearBeginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const summaryDates = datesFromYearBeginning();
const minimumSummaryDates = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length;

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

function SummaryTable({ update }: any) {
  const [summary, setSummary] = useState<Summary>([]);
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    api.get("summary").then((response) => {
      setSummary(response.data);
    });

    if (update === true) forceUpdate;
  }, [update]);

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day) => {
          return (
            <div
              key={day}
              className="text-zinc-400 text-xl h-10 w-10 mr-4 flex items-center justify-end"
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}

export default SummaryTable;
