import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { quizQuestions } from "../data/questions";
import type { Question } from "../data/questions";
import type { Bookmark } from "../data/questions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '../theme/theme_manager';

// Function to save progress
const saveProgress = async (quizId: string, currentIndex: number, score: number) => {
  try {
    await AsyncStorage.setItem(
      quizId,
      JSON.stringify({ currentIndex, score })
    );
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

// Function to load progress
const loadProgress = async (quizId: string) => {
  try {
    const savedProgress = await AsyncStorage.getItem(quizId);
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
    return { currentIndex: 0, score: 0 };
  } catch (error) {
    console.error('Error loading progress:', error);
    return { currentIndex: 0, score: 0 };
  }
};

const loadBookmarks = async (): Promise<Bookmark[]> => {
  try {
    const savedBookmarks = await AsyncStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  } catch (error) {
    console.error('Failed to load bookmarks:', error);
    return [];
  }
};

const saveBookmark = async (bookmark: Bookmark) => {
  try {
    const bookmarks = await loadBookmarks();
    const isAlreadyBookmarked = bookmarks.some((b: Bookmark) => b.question === bookmark.question);

    if (isAlreadyBookmarked) {
    } else {
      bookmarks.push(bookmark);
      await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  } catch (error) {
    console.error('Failed to save bookmark:', error);
  }
};

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputAnswer, setInputAnswer] = useState("");
  const [hasAttempted, setHasAttempted] = useState(false);
  const { subtopic } = useLocalSearchParams<{ subtopic: string }>();

  
  const quizId = `quiz_${subtopic}`;

  // dark mode settings
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const sectionBackgroundColor = isDarkMode ? '#444' : '#4169E1';
  const submitButtonColor = '#28a745';
  const bookmarkButtonColor = '#007BFF';
  const textColor = '#FFF';
  const textInputStyle = isDarkMode
  ? { backgroundColor: '#333', color: '#FFF' }
  : { backgroundColor: '#FFF', color: '#000' };

  useEffect(() => {
    const loadQuizProgress = async () => {
      const savedProgress = await loadProgress(quizId);
      const questionsForThisQuiz = quizQuestions.filter(q => q.subtopic === subtopic);

      if (savedProgress.currentIndex >= questionsForThisQuiz.length) {
        setCurrentIndex(0);
        setScore(0);
      } else {
        setCurrentIndex(savedProgress.currentIndex);
        setScore(savedProgress.score);
      }
    };
    loadQuizProgress();
  }, [subtopic]);


  const questions: Question[] = quizQuestions.filter(q => q.subtopic === subtopic);
  //pointer basic fixed it load 25/25
  console.log("Subtopic is:", subtopic);
  console.log('Current index:', currentIndex);
  console.log('Questions length:', questions.length);

  const current = questions[currentIndex];

  
  const handleAnswer = (option: string) => {
    const isCorrect =
      option.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase();
    const isLastQuestion = currentIndex + 1 === questions.length;
  
    let updatedScore = score;
  
    if (isCorrect && !hasAttempted) {
      updatedScore += 1;
      setScore(updatedScore);
    }
  
    setInputAnswer("");
    setHasAttempted(false);

    // off by 1
    saveProgress(quizId, currentIndex + 1, updatedScore); 
    
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
  };
  
  /*const handleAnswer = (option: string) => {
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
  }; */
  const handleBookmark = async () => {
    const bookmark = { question: current.question, answerOptions: current.options };
    
    const bookmarks = await loadBookmarks();
    const isAlreadyBookmarked = bookmarks.some(b => b.question === bookmark.question);

    if (isAlreadyBookmarked) {
      Alert.alert("Already Bookmarked", "This question has already been bookmarked.");
    } else {
      await saveBookmark(bookmark);
      Alert.alert("Bookmarked", "This question has been bookmarked.");
    }
  };
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.question, { color: textColor }]}>
        {currentIndex + 1}. {current.question}
      </Text>

      {current.type === "fillblank" ? (
        <>
          <TextInput
            style={[styles.input, textInputStyle]} 
            value={inputAnswer}
            onChangeText={setInputAnswer}
            placeholder="Your answer"
            onSubmitEditing={() => handleAnswer(inputAnswer)}
            returnKeyType="done"
            placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
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
      <TouchableOpacity 
      style={[styles.bookmarkButton, { backgroundColor: bookmarkButtonColor }]} 
      onPress={handleBookmark}
      >
        <Text style={styles.bookmarkButtonText}>Bookmark this question</Text>
      </TouchableOpacity>

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
  bookmarkButton: {
    padding: 15, 
    borderRadius: 10, 
    marginTop: 15,
  },
  bookmarkButtonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
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
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#008000",
    borderRadius: 5,
  },
});