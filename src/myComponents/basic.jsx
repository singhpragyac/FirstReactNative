import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

const Basic = () => {
  const theme = useColorScheme();
  console.log(theme);

  const isLightMode = theme === "light";

  const backgroundColor = isLightMode ? "white" : "black";
  const textColor = isLightMode ? "black" : "white";

  return (
    <View>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C1zvb87cxPL28JSRzOFw1SAHMMKARQ2fswLBb6L17zy-f9h7",
        }}
        style={{ width: 200, height: 200 }}
      />

      <Button title="click me"></Button>
      <TouchableOpacity
        style={{ padding: 20, backgroundColor: backgroundColor }}
        onPress={() => Alert.alert("btn clicked!!")}
      >
        <Text style={{ color: textColor }}>button</Text>
      </TouchableOpacity>

      <Pressable style={styles.btn}>
        <Text style={{ color: textColor }}>click me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgba(232, 232, 20, 0.53)",
    width: 100,
    padding: 10,
    paddingLeft: 25,
  },
});

export default Basic;
