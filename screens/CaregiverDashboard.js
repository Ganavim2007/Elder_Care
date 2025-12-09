// screens/CaregiverDashboard.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function CaregiverDashboard() {
  // demo data
  const seniors = [
    { name: 'Mrs. Sharma', avatar: require('../assets/avatar.png'), status: 'Active' },
    { name: 'Mr. Ramesh', avatar: require('../assets/avatar.png'), status: 'Needs Assistance' },
    { name: 'Mrs. Patel', avatar: require('../assets/avatar.png'), status: 'Active' },
  ];

  const alerts = [
    { text: 'Missed Medicine: Mrs. Sharma', icon: require('../assets/notifications.png') },
    { text: 'Low Activity: Mr. Ramesh', icon: require('../assets/notifications.png') },
  ];

  const moodTrends = [
    { label: 'Happy', count: 3 },
    { label: 'Neutral', count: 2 },
    { label: 'Sad', count: 1 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Caregiver Dashboard</Text>
      <Text style={styles.subtitle}>View alerts and mood trends of seniors</Text>

      {/* Senior List */}
      <Text style={styles.sectionTitle}>Seniors Assigned</Text>
      {seniors.map((s, i) => (
        <View key={i} style={styles.seniorCard}>
          <Image source={s.avatar} style={styles.seniorAvatar} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.seniorName}>{s.name}</Text>
            <Text style={styles.seniorStatus}>{s.status}</Text>
          </View>
        </View>
      ))}

      {/* Quick Alerts */}
      <Text style={styles.sectionTitle}>Quick Alerts</Text>
      {alerts.map((a, i) => (
        <View key={i} style={styles.alertCard}>
          <Image source={a.icon} style={styles.alertIcon} />
          <Text style={styles.alertText}>{a.text}</Text>
        </View>
      ))}

      {/* Mood Trends */}
      <Text style={styles.sectionTitle}>Mood Trends</Text>
      <View style={styles.moodRow}>
        {moodTrends.map((m, i) => (
          <View key={i} style={styles.moodCard}>
            <Text style={styles.moodCount}>{m.count}</Text>
            <Text style={styles.moodLabel}>{m.label}</Text>
          </View>
        ))}
      </View>

      {/* Emergency Contacts */}
      <Text style={styles.sectionTitle}>Emergency Contacts</Text>
      <View style={styles.contactCard}>
        <Text style={styles.contactName}>Family Member</Text>
        <Text style={styles.contactPhone}>+91 98765 43210</Text>

        <Text style={[styles.contactName, { marginTop: 8 }]}>Doctor</Text>
        <Text style={styles.contactPhone}>+91 91234 56789</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7FFF9',
    minHeight: '100%',
  },
  title: { fontSize: 26, fontWeight: 'bold', color: '#4CAF50', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },

  sectionTitle: { fontSize: 18, fontWeight: '700', marginVertical: 12, color: '#1A7FBA' },

  seniorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  seniorAvatar: { width: 50, height: 50, borderRadius: 25 },
  seniorName: { fontSize: 16, fontWeight: '600', color: '#333' },
  seniorStatus: { fontSize: 14, color: '#666' },

  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFECE6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  alertIcon: { width: 28, height: 28, marginRight: 10 },
  alertText: { fontSize: 14, color: '#D84315' },

  moodRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  moodCard: {
    width: '30%',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  moodCount: { fontSize: 20, fontWeight: '700', color: '#4CAF50' },
  moodLabel: { fontSize: 14, color: '#333', marginTop: 4 },

  contactCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 30,
  },
  contactName: { fontSize: 16, fontWeight: '600', color: '#333' },
  contactPhone: { fontSize: 14, color: '#666' },
});
