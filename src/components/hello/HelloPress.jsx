import { Text, Pressable, Alert } from "react-native";

const HelloPress = (props) => {
  return (
    <Pressable onPress={() => Alert.alert("You pressed the text!")}>
      <Text>You can press me</Text>
    </Pressable>
  );
};

export default HelloPress;
