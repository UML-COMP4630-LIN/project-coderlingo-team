import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { quizQuestions } from "../data/questions";
import type { Question } from "../data/questions";

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputAnswer, setInputAnswer] = useState("");
  const [hasAttempted, setHasAttempted] = useState(false);
  const { subtopic } = useLocalSearchParams<{ subtopic: string }>();
  const questions: Question[] = quizQuestions.filter(q => q.subtopic === subtopic);
  const current = questions[currentIndex];
  
  const handleAnswer = (option: string) => {
    const isCorrect =
      option.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase();
    const isLastQuestion = currentIndex + 1 === questions.length;
  
    let updatedScore = score;
  
    if (isCorrect) {
      if (!hasAttempted) {
        updatedScore += 1;
        setScore(updatedScore);
      }
  
      setInputAnswer("");
      setHasAttempted(false);
  
      if (!isLastQuestion) {
        setCurrentIndex(prev => prev + 1);
      } else {
        router.replace({
          pathname: "/quiz/result",
          params: {
            score: updatedScore.toString(), 
            total: questions.length.toString(),
          },
        });
      }
    } else {
      setHasAttempted(true);
    }
  };
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {currentIndex + 1}. {current.question}
      </Text>

      {current.type === "fillblank" ? (
        <>
          <TextInput
            style={styles.input}
            value={inputAnswer}
            onChangeText={setInputAnswer}
            placeholder="Your answer"
            onSubmitEditing={() => handleAnswer(inputAnswer)}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => handleAnswer(inputAnswer)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      ) : (
        current.options.map((option, i) => (
          <TouchableOpacity
            key={i}
            style={styles.option}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))
      )}
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressText}>
          Progress: {currentIndex + 1}/{questions.length}
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  question: { fontSize: 20, marginBottom: 20 },
  option: { backgroundColor: "#eee", padding: 15, borderRadius: 10, marginVertical: 8 },
  optionText: { fontSize: 18 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 12, fontSize: 16, marginBottom: 10 },
  submitButton: { backgroundColor: "#ffd33d", padding: 15, borderRadius: 10 },
  buttonText: { fontSize: 18, textAlign: "center" },

  progressBarContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#008000",
    borderRadius: 5,
  },
});