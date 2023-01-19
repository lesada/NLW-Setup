import { TouchableOpacity } from "react-native";

import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const components: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity onPress={goBack}>
      <Feather name="arrow-left" size={32} color={colors.zinc[400]} />
    </TouchableOpacity>
  );
};

export default components;
