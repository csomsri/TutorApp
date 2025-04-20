import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 TutorConnect</Text>
      <Text style={styles.subtitle}>Find or become a tutor today!</Text>
      <TouchableOpacity style={styles.button} onPress={() => { /* navigate later */ }}>
      <Text style={styles.buttonText}>"Go to Post Availability"</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 40,
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
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});


