import type { Question } from "../models/Question.js";

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch("/api/questions/random");
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP ${response.status}: ${errorText || "Failed to fetch questions"}`
      );
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to the server");
    }
    throw error;
  }
};
