import CustomButton from "../components/CustomButton";
import React, { useCallback, useRef } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import CustomImage from "../components/CustomImage";

const { height, width } = Dimensions.get("window");

export default function DisclaimerScreen() {
  const viewRef = useRef<Animatable.View & View & any>(null);
  const imageRef = useRef<Animatable.Image & any>(null);
  const buttonRef = useRef<Animatable.View & any>(null);
  const textRef = useRef<Animatable.Text & any>(null);

  const sectionHeight = height * 0.1;
  const footerHeight = height * 0.1;

  const imageWidth = width * 0.6;
  const imageHeight = height * 0.25;

  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      if (viewRef.current) viewRef.current.slideInDown(700);
      if (imageRef.current) imageRef.current.slideInRight(800);
      if (buttonRef.current) buttonRef.current.slideInLeft(800);
      if (textRef.current) textRef.current.slideInLeft(800);
    }, [])
  );
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.container}>
        {/* Header (4%) */}
        <Animatable.View
          ref={viewRef}
          animation="slideInDown"
          duration={700}
          style={[styles.headerContainer, { height: sectionHeight }]}
        >
          <Text style={styles.headerText}>Disclaimer</Text>
        </Animatable.View>

        {/* Main (94%) */}
        <View style={styles.mainContainer}>
          <CustomImage
            animation="slideInRight"
            duration={800}
            source={require("../assets//images/logo1.png")}
            width={imageWidth}
            height={imageHeight}
            resizeMode="contain"
            ref={imageRef}
          />
          <Animatable.Text
            animation="slideInLeft"
            duration={800}
            style={styles.MainContentText}
            ref={textRef}
          >
            This app is fan-made and intended for educational and entertainment
            purposes only. All characters, abilities, and content are inspired
            by the Hunter x Hunter series and remain the property of their
            respective owners. The app does not claim ownership of any
            copyrighted material. The creators of this app are not affiliated
            with, endorsed by, or sponsored by the original publishers or
            creators of Hunter x Hunter. All information provided within the app
            is for informational purposes only. Users are responsible for their
            own actions, and the app’s creators cannot be held liable for any
            consequences arising from its use.
          </Animatable.Text>
          <CustomButton
            title="Continue?"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            ref={buttonRef}
          />
        </View>

        {/* Footer (2%) */}
        <Animatable.View
          animation="slideInUp"
          duration={700}
          style={[styles.footerContainer, { height: footerHeight }]}
          ref={viewRef}
        >
          <Text style={styles.footerText}>© 2025 Railey Pacheco</Text>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#757a82",
  },
  headerContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1d1d",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: height * 0.02,
  },
  footerContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1d1d",
  },
  headerText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "serif",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "serif",
    justifyContent: "center",
    alignItems: "center",
  },
  MainContentText: {
    color: "black",
    fontSize: 14,
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
  },
});
