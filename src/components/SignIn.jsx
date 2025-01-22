import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: { flex: true, gap: 8, padding: 8 },
  input: {
    borderColor: theme.color.onBackground,
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
  },
  btn: {
    backgroundColor: theme.color.primary,
    borderColor: theme.color.primary,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    flex: true,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  error: { color: theme.color.error, fontSize: theme.fontSize.s },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text fontSize={"xl"} style={{ marginBottom: 16 }}>
        Sign in
      </Text>
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
        placeholder="Username"
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <TextInput
        secureTextEntry
        style={styles.input}
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
        placeholder="Password"
      />
      <View style={styles.btn}>
        <Pressable onPress={formik.handleSubmit} accessibilityLabel="Sign in">
          <Text color={"onPrimary"} fontWeight={"bold"}>
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
