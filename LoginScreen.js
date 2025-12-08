import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function CaregiverDashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Caregiver Dashboard</Text>
      <Text style={styles.subtitle}>View alerts & mood trends of seniors</Text>

      {/* Alert cards */}
      <View style={styles.card}>
        <Image source={require('../assets/avatar.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Grandma missed medicine</Text>
        <Text style={styles.cardSubtitle}>Alert sent today at 8:30 AM</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/avatar.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Mood Low</Text>
        <Text style={styles.cardSubtitle}>Detected sadness in last check-in</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/avatar.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Schedule a check-in</Text>
        <Text style={styles.cardSubtitle}>Reminder: Today at 5:00 PM</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f3f8f6',
    minHeight: '100%',
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4c9f70', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: { width: 60, height: 60, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  cardSubtitle: { fontSize: 14, color: '#888', textAlign: 'center' },
});
