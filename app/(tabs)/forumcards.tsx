// ForumCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  description: string;
};

const ForumCard: React.FC<Props> = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{description}</Text>
    </View>
  );
};

export default ForumCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#1338be',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    color: '#fff',
  },
  detail: {
    fontSize: 14,
    color: '#eee',
  },
});
