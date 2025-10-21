import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderCompnent";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomImage from "../components/CustomImage";

const { height, width } = Dimensions.get("window");

export default function EnhancementScreen() {
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
        <HeaderComponent
          height={sectionHeight}
          title="Enhancement"
          viewRef={viewRef}
        />

        {/* Main (94%) */}
        <View style={styles.mainContainer}>
          <CustomImage
            animation="slideInRight"
            duration={800}
            source={require("../assets//images/Gon.jpg")}
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
            In Hunter × Hunter, the Enhancement (Enhancer) Nen type is one of
            the six main Nen categories defined by the Ten Laws of Nen. An
            Enhancer specializes in strengthening the natural abilities of their
            body or objects, making them more powerful, durable, or effective.
            Essentially, they improve what already exists, rather than creating
            entirely new effects.
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft"
            duration={800}
            style={styles.MainContentText}
            ref={textRef}
          >
            Enhancement (強化系, Kyōka-kei) – A Nen ability type where the user
            strengthens or reinforces the natural properties of their aura to
            increase the power, speed, durability, or other innate qualities of
            themselves or objects they touch. Unlike Transmutation, the aura
            itself doesn’t change into something else; it simply amplifies what
            already exists{" "}
          </Animatable.Text>
        </View>

        {/* Footer (2%) */}
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
