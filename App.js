import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./appStyle";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, text]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
