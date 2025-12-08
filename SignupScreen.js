import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Placeholder: navigate to Dashboard after signup
    navigation.navigate("UserDashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput placeholder="Full Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "#3e73c8", marginTop: 20 }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f3f8f6" },
  title: { fontSize: 28, fontWeight: "bold", color: "#4c9f70", marginBottom: 30 },
  input: { width: "80%", padding: 15, borderWidth: 1, borderColor: "#ccd6e0", borderRadius: 10, marginBottom: 20, backgroundColor: "#fff" },
  button: { width: "80%", padding: 15, backgroundColor: "#3e73c8", borderRadius: 10, marginTop: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "600" },
});
