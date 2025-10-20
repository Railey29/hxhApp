import React from "react";
import * as Animatable from "react-native-animatable";
import { Image, ImageSourcePropType } from "react-native";

type CustomImageProps = {
  source: ImageSourcePropType;
  width: number;
  height: number;
  animation?: string;
  duration?: number;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  ref?: React.Ref<any>;
};

export default function CustomImage({
  source,
  width,
  height,
  animation = "slideInRight",
  duration = 800,
  resizeMode = "contain",
  ref,
}: CustomImageProps) {
  return (
    <Animatable.Image
      animation={animation}
      duration={duration}
      source={source}
      style={{ width, height }}
      resizeMode={resizeMode}
      ref={ref}
    />
  );
}
