import React from "react";
import { ActivityIndicator, View } from "react-native";

const components: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09090A",
      }}
    >
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
};

export default components;
