import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const CreatePage = ({ collections, setCollections }) => {
  const [item, setItem] = useState("");
  const [stock, setStock] = useState("");
  const [editItem, setEditItem] = useState(null);

  const handleSubmit = () => {
    const newItem = { id: Date.now(), item: item, stock: stock };
    setCollections([...collections, newItem]);
    setItem("");
    setStock("");
  };

  const deleteHandler = (id) => {
    setCollections(collections.filter((item) => item.id !== id));
  };

  const editHandler = (item) => {
    setEditItem(item.id);
    setItem(item.item);
    setStock(item.stock);
  };

  const updateItem = () => {
    setCollections(
      collections.map((oldItem) =>
        oldItem.id === editItem
          ? { ...oldItem, item: item, stock: stock }
          : oldItem,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemHeading}>Create Items</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item..."
        placeholderTextColor="#6767"
        value={item}
        onChangeText={setItem}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter stock..."
        value={stock}
        onChangeText={setStock}
      />

      <Pressable
        style={styles.createBtn}
        onPress={editItem ? updateItem : handleSubmit}
      >
        <Text style={{ justifyContent: "center" }}>
          {editItem ? "Edit Item in Stock" : "Add Item in Stock"}
        </Text>
      </Pressable>

      <View>
        <View style={styles.container}>
          <Text style={styles.itemHeading}>All Items in the Stock</Text>
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
                    item.stock < 20
                      ? "rgb(246, 150, 150)"
                      : "rgb(191, 230, 169)",
                },
              ]}
            >
              <Text style={styles.item}>{item.item}</Text>
              <Text style={styles.item}>{item.stock}</Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <Pressable onPress={() => editHandler(item)}>
                  <Text style={styles.item}>Edit</Text>
                </Pressable>

                <Pressable onPress={() => deleteHandler(item.id)}>
                  <Text style={styles.item}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    gap: 10,
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
  input: {
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
  },
  createBtn: {
    backgroundColor: "rgba(77, 157, 223, 0.53)",
    width: "100%",
    padding: 10,
    paddingLeft: 25,
    borderRadius: 10,
  },
});
export default CreatePage;
