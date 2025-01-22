import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import { formatCounts } from "../utils/formatCounts";
import theme from "../theme";

const Count = ({ title, content, style, ...props }) => (
  <View style={{ flex: true, alignItems: "center", gap: 4 }}>
    <Text fontSize={"s"} fontWeight={"bold"} {...props}>
      {formatCounts(content)}
    </Text>
    <Text fontSize={"s"} color={"onBackgroundLite"}>
      {title}
    </Text>
  </View>
);

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  },
}) => {
  const styles = StyleSheet.create({
    item: {
      flex: true,
      flexDirection: "column",
      gap: 24,
      padding: 16,
      backgroundColor: theme.color.surface,
      borderRadius: 4,
    },
    info: { flex: true, flexDirection: "row", gap: 16 },
    infoText: { flex: true, gap: 4, flexShrink: 1 },
    language: {
      backgroundColor: theme.color.primary,
      color: theme.color.onPrimary,
      padding: 8,
      paddingTop: 6,
      paddingBottom: 6,
      borderRadius: 4,
      marginTop: 8,
    },
    counts: {
      flex: true,
      flexDirection: "row",
      gap: 8,
      justifyContent: "space-around",
    },
    pp: { width: 56, height: 56 },
  });

  return (
    <View style={styles.item}>
      <View style={styles.info}>
        <Image
          style={styles.pp}
          source={{
            uri: ownerAvatarUrl,
          }}
        />
        <View style={styles.infoText}>
          <Text fontSize={"l"} fontWeight={"bold"}>
            {fullName}
          </Text>
          <Text fontSize={"s"} color={"onBackgroundLite"}>
            {description}
          </Text>
          <View style={{ alignSelf: "flex-start" }}>
            <Text fontSize={"s"} style={styles.language}>
              {language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.counts}>
        <Count title={"Stars"} content={stargazersCount} />
        <Count title={"Forks"} content={forksCount} />
        <Count title={"Reviews"} content={reviewCount} />
        <Count title={"Ratings"} content={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
