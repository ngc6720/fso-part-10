import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.primary,
    // ...
  },
  tab: {
    padding: 8,
    paddingTop: 32,
    paddingBottom: 32,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.tab} to={"/"}>
          <Text color={"onPrimary"} fontWeight={"bold"}>
            Repositories
          </Text>
        </Link>
        <Link style={styles.tab} to={"/sign-in"}>
          <Text color={"onPrimary"} fontWeight={"bold"}>
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
