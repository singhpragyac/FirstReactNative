import { FlatList, StyleSheet, Text, View } from "react-native";

const Items = ({ collections }) => {
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
                  item.stock < 20 ? "rgb(246, 150, 150)" : "rgb(191, 230, 169)",
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
    borderColor: "rgb(175, 175, 164)",
  },
  item: {
    fontSize: 17,
  },
});

export default Items;
