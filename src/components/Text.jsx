import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.color.onBackground,
    fontSize: theme.fontSize.body,
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeight.normal,
  },
  colorOnBackgroundLite: {
    color: theme.color.onBackgroundLite,
  },
  colorOnPrimary: {
    color: theme.color.onPrimary,
  },
  colorPrimary: {
    color: theme.color.primary,
  },
  fontSizeXS: {
    fontSize: theme.fontSize.xs,
  },
  fontSizeS: {
    fontSize: theme.fontSize.s,
  },
  fontSizeM: {
    fontSize: theme.fontSize.m,
  },
  fontSizeL: {
    fontSize: theme.fontSize.l,
  },
  fontSizeXL: {
    fontSize: theme.fontSize.xl,
  },
  fontSizeXXL: {
    fontSize: theme.fontSize.xxl,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeight.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "onBackgroundLite" && styles.colorOnBackgroundLite,
    color === "onPrimary" && styles.colorOnPrimary,
    color === "primary" && styles.colorPrimary,
    fontSize === "xs" && styles.fontSizeXS,
    fontSize === "s" && styles.fontSizeS,
    fontSize === "m" && styles.fontSizeM,
    fontSize === "l" && styles.fontSizeL,
    fontSize === "xl" && styles.fontSizeXL,
    fontSize === "xxl" && styles.fontSizeXXL,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
