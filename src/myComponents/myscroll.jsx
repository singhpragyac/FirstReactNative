import { ScrollView, StyleSheet, View } from "react-native";

const Myscroll = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ gap: 10 }}
      horizontal
    >
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box1} />
      <View style={styles.box2} />
    </ScrollView>
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
  box1: {
    height: 100,
    width: 100,
    backgroundColor: "#16e3e3",
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: "#d564eb",
  },
});

export default Myscroll;
