import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/eldercare.jpg')} style={styles.logo} />

      <Text style={styles.title}>Welcome to SereneCare</Text>
      <Text style={styles.subtitle}>Your personal eldercare assistant</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('SeniorDashboard')}
      >
        <Image source={require('../assets/dashboard.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Senior Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('CaregiverDashboard')}
      >
        <Image source={require('../assets/avatar.png')} style={styles.cardImage} />
        <Text style={styles.cardText}>Caregiver Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#f3f8f6',
    minHeight: '100%',
  },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4c9f70', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#666', marginBottom: 30, textAlign: 'center' },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: { width: 80, height: 80, marginBottom: 15 },
  cardText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
});
