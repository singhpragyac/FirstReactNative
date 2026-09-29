import { FlatList, StyleSheet, Text, View } from "react-native";

const collections = [
  { id: "1", item: "Rice", stock: "77" },
  { id: "2", item: "Dal", stock: "7" },
  { id: "3", item: "Rajma", stock: "12" },
  { id: "4", item: "Bhindi", stock: "27" },
  { id: "5", item: "Gobhi", stock: "17" },
  { id: "6", item: "Beans", stock: "21" },
];

const Items = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.itemHeading}>Items</Text>
        <Text style={styles.itemHeading}>Stock</Text>
      </View>

      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  item.stock < 20 ? "rgb(237, 86, 86)" : "rgb(123, 219, 71)",
              },
            ]}
          >
            <Text style={styles.item}>{item.item}</Text>
            <Text style={styles.item}>{item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  itemHeading: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgb(123, 219, 71)",
    // gap: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
  item: {
    // backgroundColor: "red",
  },
});

export default Items;
