import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function SeniorDashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Senior Dashboard</Text>
      <Text style={styles.subtitle}>Your daily reminders & mood tracker</Text>

      {/* Reminder cards */}
      <View style={styles.card}>
        <Image source={require('../assets/eldercare.jpg')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Take Medicine</Text>
        <Text style={styles.cardSubtitle}>Today at 8:00 AM</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/avatar.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Morning Walk</Text>
        <Text style={styles.cardSubtitle}>Today at 7:00 AM</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/dashboard.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Check Mood</Text>
        <Text style={styles.cardSubtitle}>Log your feelings</Text>
      </View>

      {/* Emergency Contacts Card */}
      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Emergency Contacts</Text>
        <View style={styles.contactRow}>
          <Image source={require('../assets/avatar.png')} style={styles.contactAvatar} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Family Member</Text>
            <Text style={styles.contactPhone}>+91 98765 43210</Text>
          </View>
        </View>

        <View style={styles.contactRow}>
          <Image source={require('../assets/avatar.png')} style={styles.contactAvatar} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Doctor</Text>
            <Text style={styles.contactPhone}>+91 91234 56789</Text>
          </View>
        </View>

        <View style={styles.contactRow}>
          <Image source={require('../assets/avatar.png')} style={styles.contactAvatar} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Neighbour</Text>
            <Text style={styles.contactPhone}>+91 99887 66554</Text>
          </View>
        </View>
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
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  cardSubtitle: { fontSize: 14, color: '#888' },

  // Contact card
  contactCard: {
    width: '90%',
    backgroundColor: '#E8F5E9',
    padding: 18,
    borderRadius: 18,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  contactTitle: { fontSize: 20, fontWeight: 'bold', color: '#4CAF50', marginBottom: 12 },
  contactRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  contactAvatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  contactInfo: {},
  contactName: { fontSize: 16, fontWeight: '600', color: '#333' },
  contactPhone: { fontSize: 14, color: '#666' },
});
