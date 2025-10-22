import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderCompnent";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
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
        {/* Header (4%)  of screen*/}
        <HeaderComponent
          height={sectionHeight}
          title="Select Nen Type You want to Explore"
          viewRef={viewRef}
        />
        {/* Main (94%) of screen*/}
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
            title="Enhancer"
            onPress={() => router.push("/EnhancementScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Transmuter"
            onPress={() => router.push("/TransmutationScreen")}
            animation="slideInLeft"
            width={width * 0.9}
          />
          <CustomButton
            title="Emitter"
            onPress={() => router.push("/EmissionScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Conjurer"
            onPress={() => router.push("/ConjurationScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Manipulator"
            onPress={() => router.push("/ManipulationScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
          <CustomButton
            title="Specialist"
            onPress={() => router.push("/SpecializationScreen")}
            animation="slideInLeft"
            width={width * 0.9}
            ref={buttonRef}
          />
        </View>

        {/* Footer (2%) of screen*/}
        <FooterComponent height={footerHeight} viewRef={viewRef} />
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
