import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const users = [
  {
    id: "1",
    name: "Pragya Singh",
    email: "pragya@gmail.com",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Priya Verma",
    email: "priya@gmail.com",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Aman Gupta",
    email: "aman@gmail.com",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Neha Kumari",
    email: "neha@gmail.com",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "6",
    name: "Rohit Kumar",
    email: "rohit@gmail.com",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "7",
    name: "Anjali Singh",
    email: "anjali@gmail.com",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "8",
    name: "Vikas Yadav",
    email: "vikas@gmail.com",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "9",
    name: "Sneha Patel",
    email: "sneha@gmail.com",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "10",
    name: "Arjun Mehta",
    email: "arjun@gmail.com",
    image: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "11",
    name: "Karan Malhotra",
    email: "karan@gmail.com",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "12",
    name: "Simran Kaur",
    email: "simran@gmail.com",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "13",
    name: "Aditya Sharma",
    email: "aditya@gmail.com",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "14",
    name: "Pooja Verma",
    email: "pooja@gmail.com",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: "15",
    name: "Riya Gupta",
    email: "riya@gmail.com",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "16",
    name: "Mohit Yadav",
    email: "mohit@gmail.com",
    image: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: "17",
    name: "Isha Patel",
    email: "isha@gmail.com",
    image: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: "18",
    name: "Varun Mehta",
    email: "varun@gmail.com",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "19",
    name: "Kavya Singh",
    email: "kavya@gmail.com",
    image: "https://i.pravatar.cc/150?img=19",
  },
  {
    id: "20",
    name: "Sahil Kumar",
    email: "sahil@gmail.com",
    image: "https://i.pravatar.cc/150?img=20",
  },
];

const MyFlatList = () => {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View style={styles.card} key={item.id}>
          <Image
            source={{
              uri: item.image,
            }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <Text>{item.name}</Text>
        </View>
      )}
      ItemSeparatorComponent={<View style={{ height: 10 }} />}
      keyExtractor={(item) => item.id}
      // numColumns={2}
      // columnWrapperStyle={{ gap: 10 }}
      horizontal
      contentContainerStyle={{ gap: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 100,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
});

export default MyFlatList;
