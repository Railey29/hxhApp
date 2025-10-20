import React from "react";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { Dimensions } from "react-native";

// Properly type the animatable TouchableOpacity
const AnimatableTouchable: React.ComponentType<
  React.ComponentProps<typeof TouchableOpacity> &
    Animatable.AnimatableProps<ViewStyle>
> = Animatable.createAnimatableComponent(TouchableOpacity);

type CustomButtonProps = {
  animation?: string;
  duration?: number;
  backgroundColor?: string;
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?: "flex-start" | "center" | "flex-end";
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  title: string;
  width?: number;
  ref?: React.Ref<any>;
  onPress: () => void;
};

export default function CustomButton({
  animation = "bounceIn",
  duration = 800,
  backgroundColor = "#1f1d1d",
  alignItems = "center",
  justifyContent = "center",
  paddingVertical = 12,
  paddingHorizontal = 25,
  borderRadius = 10,
  width,
  title,
  ref,
  onPress,
}: CustomButtonProps) {
  return (
    <AnimatableTouchable
      animation={animation}
      duration={duration}
      style={{
        backgroundColor,
        paddingVertical,
        paddingHorizontal,
        borderRadius,
        alignItems,
        justifyContent,
        width,
      }}
      onPress={onPress}
      ref={ref}
    >
      <Text style={{ color: "white", fontWeight: "600" }}>{title}</Text>
    </AnimatableTouchable>
  );
}
