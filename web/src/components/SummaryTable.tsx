import { datesFromYearBeginning } from "../utils/datesFromYearBeginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const sumaryDates = datesFromYearBeginning();
const minimumSummaryDates = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDates - sumaryDates.length;

const SummaryTable: React.FC = () => {
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
        {sumaryDates.map((date) => {
          return (
            <HabitDay
              key={date.toString()}
              amount={5}
              completed={Math.round(Math.random() * 5)}
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
};

export default SummaryTable;
