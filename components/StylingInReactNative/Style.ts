import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#ca7e7e",
    fontWeight: "bold",

    // text alignment
    textAlign: "center", // left | right | center | justify

    // spacing
    marginVertical: 10,
    paddingHorizontal: 8,

    // font appearance
    fontStyle: "italic", // normal | italic
    letterSpacing: 1,
    lineHeight: 28,

    // text decoration
    // textDecorationLine: "underline", // underline | line-through | none
    // textDecorationColor: "red",

    // background
    backgroundColor: "#f2f2f2",

    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    // elevation (Android)
    elevation: 4,
  },
});
