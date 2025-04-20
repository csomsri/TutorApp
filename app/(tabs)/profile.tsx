import { View, Text, StyleSheet} from 'react-native';

export default function LeaderBoardPage() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#Ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,

  },

});