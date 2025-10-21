import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

type HeaderProps = {
  height: number;
  title: string;
  viewRef?: React.RefObject<View>;
};

export default function HeaderComponent({
  height,
  title,
  viewRef,
}: HeaderProps) {
  return (
    <Animatable.View
      ref={viewRef}
      animation="slideInDown"
      duration={700}
      style={[styles.headerContainer, { height }]}
    >
      <Text style={styles.headerText}>{title}</Text>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1d1d",
    width: "100%",
  },
  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "serif",
    textAlign: "center",
  },
});
