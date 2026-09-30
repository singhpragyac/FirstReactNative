import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AllItems from "./Allitems";
import CreatePage from "./Createpage";

const Dashboard = () => {
  const [view, setView] = useState(0);
  const [collections, setCollections] = useState([
    { id: "1", item: "Rice", stock: "77" },
    { id: "2", item: "Dal", stock: "7" },
    { id: "3", item: "Rajma", stock: "12" },
    { id: "4", item: "Bhindi", stock: "27" },
    { id: "5", item: "Gobhi", stock: "17" },
    { id: "6", item: "Beans", stock: "21" },
  ]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Dashboard</Text>
      <View style={Styles.btnContainer}>
        <Pressable
          style={[
            Styles.btn,
            view === 0 ? { backgroundColor: "rgba(34, 224, 16, 0.47)" } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text style={Styles.btnText}>All items</Text>
        </Pressable>

        <Pressable
          style={[
            Styles.btn,
            view === 1 ? { backgroundColor: "rgba(34, 224, 16, 0.47)" } : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text style={Styles.btnText}>Low Stock</Text>
        </Pressable>

        <Pressable
          style={[
            Styles.btn,
            view === 2 ? { backgroundColor: "rgba(34, 224, 16, 0.47)" } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text style={Styles.btnText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems collections={collections} />}
      {view === 1 && (
        <AllItems collections={collections.filter((item) => item.stock < 20)} />
      )}
      {view === 2 && (
        <CreatePage collections={collections} setCollections={setCollections} />
      )}
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
  },
});
export default Dashboard;
