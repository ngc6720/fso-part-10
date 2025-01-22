import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "grey",
    fontSize: 14,
  },
  blueText: {
    color: "blue",
  },
  bigText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

const FancyLine = ({ isBlue, isBig, children }) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText,
    isBig && styles.bigText,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const FancyText = () => {
  return (
    <>
      <FancyLine>Simple text</FancyLine>
      <FancyLine isBlue>Blue text</FancyLine>
      <FancyLine isBig>Big text</FancyLine>
      <FancyLine isBig isBlue>
        Big blue text
      </FancyLine>
    </>
  );
};
export default FancyText;
