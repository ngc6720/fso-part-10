import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

import useAuthStorage from "./useAuthStorage";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const [mutate, result] = useMutation(AUTHENTICATE, {
    variables: { username: "", password: "" },
  });

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    if (!data.authenticate.accessToken) {
      return;
    }

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    navigate("/");
  };

  return [signIn, result];
};

export default useSignIn;
