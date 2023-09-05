import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import * as Linking from "expo-linking";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Samuel Wyndham | Sign365</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        className=" text-light-tint mb-8"
        onPress={() => Linking.openURL("https://github.com/mrwyndham")}
      >
        Github
      </TouchableOpacity>
      <TouchableOpacity
        className=" text-light-tint mb-8"
        onPress={() =>
          Linking.openURL("https://au.linkedin.com/in/samuel-wyndham-172416115")
        }
      >
        LinkedIn
      </TouchableOpacity>
      <TouchableOpacity
        className=" text-light-tint mb-8"
        onPress={() => Linking.openURL("https://sign365.com.au/")}
      >
        Website
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
