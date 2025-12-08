// screens/CaregiverDashboard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CaregiverDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caregiver Dashboard</Text>
      <Text style={styles.subtitle}>View alerts and mood trends of seniors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:10 },
  subtitle: { fontSize:18, color:'#666' },
});
