import useQuiz from "@/hooks/useQuiz";
import { question } from "@/types/quizTypes";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";

type quizProps = {
  question: question[];
  onFinish: () => void;
  height: number;
};

export default function QuizComponent({
  question,
  onFinish,
  height,
}: quizProps) {
  const {
    handleChoiceSelect,
    handleNext,
    currentQuestion,
    currentIndex,
    selectedChoice,
    isAnswered,
    score,
    isCorrect,
  } = useQuiz(question, onFinish);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Animatable.View
          animation={"slideInUp"}
          duration={700}
          style={[{ height: height }]}
        >
          {/**Question */}
          <Text style={styles.questionText}>
            {`Question: ${currentIndex + 1}: ${currentQuestion.question}`}
          </Text>

          {/**Choices */}

          {currentQuestion.choice.map((ch, index) => {
            let choiceStyle = styles.choiceButton;

            if (isAnswered) {
              if (ch === currentQuestion.answer) {
                choiceStyle = { ...choiceStyle, backgroundColor: "#4CAF50" }; //
              } else if (
                ch === selectedChoice &&
                ch !== currentQuestion.answer
              ) {
                choiceStyle = { ...choiceStyle, backgroundColor: "#E53935" };
              }
            }

            return (
              <TouchableOpacity
                key={index}
                style={choiceStyle}
                onPress={() => handleChoiceSelect(ch)}
              >
                <Text style={styles.choiceText}>{ch}</Text>
              </TouchableOpacity>
            );
          })}

          {isAnswered && (
            <Text style={styles.feedbackText}>
              {isCorrect ? "✅ Correct!" : "❌ Wrong Answer"}
            </Text>
          )}

          <TouchableOpacity
            style={[styles.nextButton, { opacity: isAnswered ? 1 : 0.5 }]}
            onPress={handleNext}
            disabled={!isAnswered}
          >
            <Text style={styles.nextText}>
              {currentIndex + 1 === question.length ? "Finish" : "Next"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.scoreText}>Current Score: {score}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "serif",
    alignSelf: "center",
    paddingHorizontal: 10,
  },

  choiceButton: {
    backgroundColor: "#2c2c2c",
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    marginTop: 10,
  },
  choiceText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "serif",
  },
  nextButton: {
    backgroundColor: "#2c2c2c",
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  nextText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  selectedChoiceButton: {
    backgroundColor: "#4a90e2",
  },
  feedbackText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },

  scoreText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
    marginTop: 40,
  },
});
