import CustomButton from "../components/CustomButton";
import React, { useCallback, useRef } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useRouter } from "expo-router";
import CustomImage from "../components/CustomImage";

const { height, width } = Dimensions.get("window");

export default function DashboardScreen() {
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
          animation="slideInDown"
          duration={700}
          style={[styles.headerContainer, { height: sectionHeight }]}
          ref={viewRef}
        >
          <Text style={styles.headerText}>
            Select Nen Type You want to Explore
          </Text>
        </Animatable.View>

        {/* Main (94%) */}
        <View style={styles.mainContainer}>
          <CustomImage
            animation="slideInRight"
            duration={800}
            source={require("../assets//images/logo2.png")}
            width={imageWidth}
            height={imageHeight}
            resizeMode="contain"
            ref={imageRef}
          />
          <CustomButton
            title="Enhancement"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Transmutation"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            width={width * 0.9}
          />
          <CustomButton
            title="Emission"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Conjuration"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Manipulation"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Specialization"
            onPress={() => router.push("/DashboardScreen")}
            animation="slideInLeft"
            width={width * 0.9}
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
    gap: 20,
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
