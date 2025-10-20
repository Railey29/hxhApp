import DisclaimerScreen from "./DisclaimerScreen";
import { View } from "react-native";
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
