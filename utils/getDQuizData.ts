import { conjurationData } from "@/QuizData/Conjuration";
import { emissionData } from "@/QuizData/EmissionData";
import { enhancementData } from "@/QuizData/enhancenmentData";
import { manipulationData } from "@/QuizData/Manipulation";
import { specializationData } from "@/QuizData/Specialization";
import { transmutationData } from "@/QuizData/TransmutationData";

export function getQuizData(type: string) {
  switch (type) {
    case "Enhancement":
      return enhancementData;
    case "Transmutation":
      return transmutationData;
    case "Emission":
      return emissionData;
    case "Conjuration":
      return conjurationData;
    case "Manipulation":
      return manipulationData;
    case "Specialization":
      return specializationData;
    default:
      return [];
  }
}
