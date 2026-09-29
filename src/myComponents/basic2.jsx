import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

const Basic2 = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 30 }}>Basic2 is working</Text>
      <Text style={{ backgroundColor: "yellow", padding: 10 }}>Welcome!!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name Here"
        value={text}
        onChangeText={(e) => setText(e)}
      />
      <Button title="submit" onPress={handleSubmit}></Button>
      {submittedText ? <Text>Result:{submittedText}</Text> : null}
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id inventore
        quis, quam, deserunt cupiditate ex consectetur nobis earum ipsum dolorem
        maiores numquam rerum dicta cum nemo voluptatibus veniam dignissimos
        quod. Sit, temporibus! Quisquam sequi non esse? Tempora quae excepturi
        eius libero! Voluptate saepe, natus iure omnis excepturi ad corporis
        quam!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(145, 169, 139, 0.53)",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  btn: {
    backgroundColor: "rgba(232, 232, 20, 0.53)",
    width: 100,
    padding: 10,
    paddingLeft: 25,
  },
  input: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
  },
});

export default Basic2;
