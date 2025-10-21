import { View } from "react-native";
import DisclaimerScreen from "./DisclaimerScreen";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#757a82",
      }}
    >
      <DisclaimerScreen />
    </View>
  );
}
