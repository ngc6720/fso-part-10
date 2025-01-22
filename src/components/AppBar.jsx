import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

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
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const { data, loading } = useQuery(ME);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.tab} to={"/"}>
          <Text color={"onPrimary"} fontWeight={"bold"}>
            Repositories
          </Text>
        </Link>
        {!loading && data?.me ? (
          <Pressable style={styles.tab} onPress={signOut}>
            <Text color={"onPrimary"} fontWeight={"bold"}>
              Sign out
            </Text>
          </Pressable>
        ) : (
          <Link style={styles.tab} to={"/sign-in"}>
            <Text color={"onPrimary"} fontWeight={"bold"}>
              Sign in
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
