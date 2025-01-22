import { Platform } from "react-native";

const theme = {
  color: {
    primary: "#0366d6",
    onPrimary: "#ffffff",
    background: "#f2f2f2",
    onBackground: "#444444",
    onBackgroundLite: "#536774",
    surface: "#ffffff",
    onSurface: "#444444",
    error: "#d73a4a",
  },
  fontSize: {
    xs: 11,
    s: 14,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 32,
  },
  font: {
    main:
      Platform.OS === "android"
        ? "Roboto"
        : Platform.OS === "ios"
        ? "Arial"
        : "System",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
