import { View } from "react-native";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
    </View>
  );
};

export default Home;
