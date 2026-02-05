import React from "react";
import { Button, StyleSheet, ToastAndroid, View } from "react-native";

const ToastExampleApp = () => {
  // 1️⃣ Simple Toast
  const showSimpleToast = () => {
    ToastAndroid.show("This is a simple toast", ToastAndroid.SHORT);
  };

  // 2️⃣ Toast at TOP
  const showTopToast = () => {
    ToastAndroid.showWithGravity(
      "Toast at TOP",
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  // 3️⃣ Toast at CENTER
  const showCenterToast = () => {
    ToastAndroid.showWithGravity(
      "Toast at CENTER",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };

  // 4️⃣ Toast at BOTTOM with Offset
  const showBottomOffsetToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Bottom toast with offset",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0, // xOffset (left/right)
      100, // yOffset (up/down)
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show Simple Toast" onPress={showSimpleToast} />
      <Button title="Show TOP Toast" onPress={showTopToast} />
      <Button title="Show CENTER Toast" onPress={showCenterToast} />
      <Button
        title="Show BOTTOM Offset Toast"
        onPress={showBottomOffsetToast}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
});

export default ToastExampleApp;
