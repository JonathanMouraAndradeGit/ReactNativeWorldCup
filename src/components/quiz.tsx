import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [points, setPoints] = useState(0);

  const quiz = [
    {
      question: "Qual seleção venceu a Copa do Mundo de 2002?",
      answers: [
        { answer: "Brasil", correct: true },
        { answer: "Alemanha", correct: false },
        { answer: "Argentina", correct: false },
      ],
    },
    {
      question: "Quantas Copas do Mundo o Brasil conquistou?",
      answers: [
        { answer: "4", correct: false },
        { answer: "5", correct: true },
        { answer: "6", correct: false },
      ],
    },
    {
      question: "Em que país foi realizada a Copa de 2014?",
      answers: [
        { answer: "Alemanha", correct: false },
        { answer: "África do Sul", correct: false },
        { answer: "Brasil", correct: true },
      ],
    },
    {
      question: "Quem venceu a Copa do Mundo de 2022?",
      answers: [
        { answer: "França", correct: false },
        { answer: "Argentina", correct: true },
        { answer: "Croácia", correct: false },
      ],
    },
    {
      question: "Qual jogador é conhecido como 'Rei do Futebol'?",
      answers: [
        { answer: "Maradona", correct: false },
        { answer: "Pelé", correct: true },
        { answer: "Messi", correct: false },
      ],
    },
  ];

  function changeCurrent(correct:boolean) {
    if (correct) {
      setPoints((prev) => prev + 1);
    }

    setCurrent((prev) => prev + 1);
  }

  const percentage = Math.round((points * 100) / quiz.length);

  return (
    <SafeAreaView style={styles.container}>
      {current < quiz.length ? (
        <View style={styles.card}>
          <Text style={styles.counter}>
            Pergunta {current + 1}/{quiz.length}
          </Text>

          <Text style={styles.question}>
            {quiz[current].question}
          </Text>

          <View style={styles.answersContainer}>
            {quiz[current].answers.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.answerButton}
                onPress={() => changeCurrent(item.correct)}
              >
                <Text style={styles.answerText}>
                  {item.answer}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Quiz Finalizado!</Text>

          <Text style={styles.resultPoints}>
            Acertos: {points}/{quiz.length}
          </Text>

          <Text style={styles.resultPercentage}>
            {percentage}%
          </Text>

          <TouchableOpacity
            style={styles.restartButton}
            onPress={() => {
              setCurrent(0);
              setPoints(0);
            }}
          >
            <Text style={styles.restartText}>
              Jogar Novamente
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07111f",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#0d1b2d",
    padding: 20,
    borderRadius: 20,
  },

  counter: {
    color: "#4da3ff",
    fontSize: 14,
    marginBottom: 10,
  },

  question: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  },

  answersContainer: {
    gap: 12,
  },

  answerButton: {
    backgroundColor: "#1b2a41",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  answerText: {
    color: "#fff",
    fontSize: 16,
  },

  resultCard: {
    backgroundColor: "#0d1b2d",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },

  resultTitle: {
    color: "#4da3ff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  resultPoints: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },

  resultPercentage: {
    color: "#4da3ff",
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
  },

  restartButton: {
    backgroundColor: "#1b2a41",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  restartText: {
    color: "#4da3ff",
    fontWeight: "bold",
    fontSize: 16,
  },
});