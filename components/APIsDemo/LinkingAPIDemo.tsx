import React, { useEffect } from "react";
import { Alert, Button, Linking, StyleSheet, Text, View } from "react-native";

export default function LinkingAPIDemo() {
  // 1️⃣ Open a website link
  const openWebsite = () => {
    Linking.openURL("https://google.com");
  };

  // 2️⃣ Open phone, email, SMS, WhatsApp
  const openPhone = () => {
    Linking.openURL("tel:+911234567890");
  };

  const openEmail = () => {
    Linking.openURL("mailto:test@gmail.com");
  };

  const openSMS = () => {
    Linking.openURL("sms:+911234567890");
  };

  const openWhatsApp = () => {
    Linking.openURL("whatsapp://send?phone=911234567890&text=Hello");
  };

  // 3️⃣ Check if a link can be opened
  const checkAndOpenWhatsApp = async () => {
    const supported = await Linking.canOpenURL("whatsapp://send");
    if (supported) {
      Linking.openURL("whatsapp://send?phone=911234567890");
    } else {
      Alert.alert("WhatsApp is not installed");
    }
  };

  // 4️⃣ Deep linking (open your app using URL)
  const openDeepLink = () => {
    Linking.openURL("myapp://profile/101");
  };

  // 5️⃣ Get the URL that opened the app (Deep link)
  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        Alert.alert("App opened with URL", url);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linking API Examples</Text>

      <Button title="1️⃣ Open Website" onPress={openWebsite} />
      <Button title="2️⃣ Call Phone" onPress={openPhone} />
      <Button title="📧 Send Email" onPress={openEmail} />
      <Button title="💬 Send SMS" onPress={openSMS} />
      <Button title="🟢 Open WhatsApp" onPress={openWhatsApp} />
      <Button title="3️⃣ Check WhatsApp & Open" onPress={checkAndOpenWhatsApp} />
      <Button title="4️⃣ Open Deep Link" onPress={openDeepLink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
