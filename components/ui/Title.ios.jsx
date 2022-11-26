import { StyleSheet, Text, Platform } from "react-native";

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
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: 0,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
  },
});

export default Title;
