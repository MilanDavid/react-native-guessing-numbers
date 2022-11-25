import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
    borderColor: "white",
    borderWidth: 2,
    fontFamily: "open-sans-bold",
  },
});

export default Title;
