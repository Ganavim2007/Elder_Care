import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View><Text>Requesting camera permission...</Text></View>;
  if (hasPermission === false) return <View><Text>No access to camera</Text></View>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UserDashboard")}>
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  button: { position: "absolute", bottom: 40, left: "20%", right: "20%", padding: 15, backgroundColor: "#4c9f70", borderRadius: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "600" },
});
