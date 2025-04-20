// ForumScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import ForumCard from './forumcards';

export default function ForumScreen() {
  const [cards, setCards] = useState<{ title: string; description: string }[]>([
    { title: 'Card 1', description: 'This is the first card' },
  ]);

  const addCard = () => {
    const next = cards.length + 1;
    setCards([
      ...cards,
      { title: `Card ${next}`, description: 'This is a new card' },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={addCard} style={{ padding: 16, backgroundColor: '#eee' }}>
        <Text>Add a Card</Text>
      </TouchableOpacity>
      <ScrollView>
        {cards.map((c, i) => (
          <ForumCard key={i} title={c.title} description={c.description} />
        ))}
      </ScrollView>
    </View>
  );
}
