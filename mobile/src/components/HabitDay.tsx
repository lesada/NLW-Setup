import { TouchableOpacity, Dimensions } from "react-native";
const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const dayMarginBetween = 8;

export const daySize =
  Dimensions.get("screen").width / weekDays - (screenHorizontalPadding + 5);

const HabitDay: React.FC = () => {
  return (
    <TouchableOpacity
      className="bg-zinc-900 m-1 rounded-lg border-2  border-zinc-800"
      style={{ width: daySize, height: daySize }}
    ></TouchableOpacity>
  );
};

export default HabitDay;
