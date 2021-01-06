import { StyleSheet } from "react-native";
import { darkColors } from "../Styles/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: darkColors.bg,
  },
  form: {
    flex: 1,
    alignItems: "center",
  },
  inputs: {
    width: 400,
    maxWidth: 500,
    margin: 10,
    padding: 15,
    flex: 1,
    color: darkColors.text,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: darkColors.text,
  },
});
