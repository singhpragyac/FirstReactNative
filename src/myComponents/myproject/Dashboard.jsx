import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CreatePage from "./Createpage";
import Items from "./Items";

const Dashboard = () => {
  const [view, setView] = useState(0);
  console.log(setView);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Dashboard</Text>
      <View style={Styles.btnContainer}>
        <Pressable
          style={[
            Styles.btn,
            view === 0 ? { backgroundColor: "rgba(79, 185, 13, 0.47)" } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text style={Styles.btnText}>All items</Text>
        </Pressable>

        <Pressable
          style={[
            Styles.btn,
            view === 1 ? { backgroundColor: "rgba(79, 185, 13, 0.47)" } : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text style={Styles.btnText}>Low Stock</Text>
        </Pressable>

        <Pressable
          style={[
            Styles.btn,
            view === 2 ? { backgroundColor: "rgba(79, 185, 13, 0.47)" } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text style={Styles.btnText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <Items />}
      {view === 1 && <Items />}
      {view === 2 && <CreatePage />}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 15,
    paddingVertical: 10,
  },
  btn: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "rgba(56, 63, 56, 0.47)",
  },
  btnText: {
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: 10,
    // backgroundColor: "rgba(156, 225, 156, 0.4)",
  },
});
export default Dashboard;
