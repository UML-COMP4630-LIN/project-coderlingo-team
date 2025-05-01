import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import { StudyQuestions } from "../data/study";
import type { Study } from "../data/study";

const imageMap: { [key: string]: any } = {
  "images/icons/image1.png": require('../../assets/images/icons/image1.png'),
  "images/icons/image2.png": require('../../assets/images/icons/image2.png'),
  "images/icons/image3.png": require('../../assets/images/icons/image3.png'),
  "images/icons/image4.png": require('../../assets/images/icons/image4.png'),
  "images/icons/image5.png": require('../../assets/images/icons/image5.png'),
  "images/icons/image6.png": require('../../assets/images/icons/image6.png'),
  "images/icons/image7.png": require('../../assets/images/icons/image7.png'),

};

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAttempted, setHasAttempted] = useState(false);

  const questions: Study[] = StudyQuestions;
  const current = questions[currentIndex];

  const handleAnswer = (option: string) => {
    const isCorrect =
      option.trim().toLowerCase() === (current.correctAnswer|| "").trim().toLowerCase();
    const isLastQuestion = currentIndex + 1 === questions.length;
    let updatedScore = score;
    
    if (isCorrect && !hasAttempted) {
      updatedScore += 1;
      setScore(updatedScore);
    }
    setHasAttempted(true);

    if (!isLastQuestion) {
      setCurrentIndex(prev => prev + 1);
    } else {
      router.replace({
        pathname: "/Study/result",
        params: {
          score: updatedScore.toString(),
          total: questions.length.toString(),
        },
      });
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <ScrollView>
          <Text style={styles.question}>
            {currentIndex + 1}. {current.question}
          </Text>
        </ScrollView>
      </View>

      {current.type === "image" && current.image && (
        <View style={styles.imageContainer}>
          <Image
            source={imageMap[current.image]}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}



      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.bookmarkButton} onPress={() => {}}>
          <Text style={styles.bookmarkText}>BOOKMARK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleAnswer('')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

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
    container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#89CFF0" },
    question: { fontSize: 20, marginBottom: 20 },
    option: { backgroundColor: "#eee", padding: 15, borderRadius: 10, marginVertical: 8 },
    optionText: { fontSize: 18 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 12, fontSize: 16, marginBottom: 10 },
    submitButton: { backgroundColor: "#008000", padding: 15, borderRadius: 10 },
    buttonText: { color: 'white', fontSize: 18, textAlign: "center" },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    bookmarkButton: {
      backgroundColor: "#18191A",
      padding: 15,
      borderRadius: 10,
    },
    bookmarkText: {
      fontSize: 18,
      color: "white",
    },
    questionBox: {
      maxHeight: 220,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      borderWidth: 1,
    },    
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
      borderRadius: 5,
      backgroundColor: "#fff",
    },
    progressFill: {
      height: "100%",
      backgroundColor: "#008000",
      borderRadius: 5,
      borderWidth: 1,
    },
    imageContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    image: {
      width: "100%",
      height: 120,
      borderRadius: 10,
      backgroundColor: "transparent",
    },
});
