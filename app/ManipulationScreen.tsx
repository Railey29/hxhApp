import CustomButton from "@/components/CustomButton";
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

export default function ManipulationScreen() {
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
          title="Manipulator"
          viewRef={viewRef}
        />

        {/* Main (94%) */}
        <View style={styles.mainContainer}>
          <CustomImage
            animation="slideInRight"
            duration={800}
            source={require("../assets//images/Shalnark.jpg")}
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
            In Hunter x Hunter (HxH), Manipulation is a Nen ability type that
            allows a user to control living or non-living things using their
            aura, giving them the ability to influence actions, movements, or
            behaviors. Essentially, a Manipulator can make targets act according
            to their will, often within specific conditions or rules.
          </Animatable.Text>
          <Animatable.Text
            animation="slideInLeft"
            duration={800}
            style={styles.MainContentText}
            ref={textRef}
          >
            Manipulation (操作系, Sōsa-kei) – A Nen ability type in which the
            user controls objects, people, or other living beings by exerting
            their aura, often with specific limitations or conditions to
            strengthen the effect.
          </Animatable.Text>
          <CustomButton
            title="Start Quiz"
            onPress={() =>
              router.push({
                pathname: "/QuizScreen",
                params: { type: "Manipulation" },
              })
            }
            animation="slideInLeft"
            ref={buttonRef}
          />
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
