import { question } from "@/types/quizTypes";
import { useState } from "react";

export default function useQuiz(question: question[], onFinish: () => void) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = question[currentIndex];

  const handleChoiceSelect = (choice: string) => {
    if (isAnswered) return;

    setSelectChoice(choice);
    setIsAnswered(true);
    const correct = choice === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 < question.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectChoice(null);
      setIsAnswered(false);
      setIsCorrect(null);
    } else {
      onFinish();
    }
  };

  return {
    handleChoiceSelect,
    handleNext,
    currentQuestion,
    currentIndex,
    selectedChoice,
    isAnswered,
    score,
    isCorrect,
  };
}
