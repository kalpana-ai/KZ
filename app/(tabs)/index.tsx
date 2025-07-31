import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { User, Building2 } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleCitizenPress = () => {
    router.push('/login?type=citizen');
  };

  const handleHospitalPress = () => {
    router.push('/login?type=hospital');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Please select your account type</Text>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.optionCard} 
            onPress={handleCitizenPress}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <User size={48} color="#22C55E" />
            </View>
            <Text style={styles.optionTitle}>Citizen</Text>
            <Text style={styles.optionDescription}>Access healthcare services</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.optionCard} 
            onPress={handleHospitalPress}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Building2 size={48} color="#22C55E" />
            </View>
            <Text style={styles.optionTitle}>Hospital</Text>
            <Text style={styles.optionDescription}>Manage healthcare services</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#16A34A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 24,
  },
  optionCard: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#f3f4f6',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    marginBottom: 16,
  },
  optionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#16A34A',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});