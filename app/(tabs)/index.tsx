import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 TutorConnect</Text>
      <Text style={styles.subtitle}>Find or become a tutor today!</Text>
      <Button title="Go to Post Availability" onPress={() => { /* navigate later */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
});
