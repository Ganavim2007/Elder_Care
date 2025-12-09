import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>ElderCare AI</Text>
      <Text style={styles.slogan}>Caring made simple with smart monitoring</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  slogan: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});
