import React from "react";
import { StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

type FooterProps = {
  height: number;
  viewRef?: React.RefObject<Animatable.View>;
};

export default function FooterComponent({ height, viewRef }: FooterProps) {
  return (
    <>
      <Animatable.View
        animation="slideInUp"
        duration={700}
        style={[styles.footerContainer, { height: height }]}
        ref={viewRef}
      >
        <Text style={styles.footerText}>© 2025 Railey Pacheco</Text>
      </Animatable.View>
    </>
  );
}
const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1d1d",
    width: "100%",
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "serif",
    justifyContent: "center",
    alignItems: "center",
  },
});
