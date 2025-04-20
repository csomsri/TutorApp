import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Cards from 'forumcards.tsx';


const Forumscreen = () => {
    // const [cards, setCards] = useState<{ title: string, description: string}[]>([])
    
    // const handleNewCard = () =>{
    //     const newCard = {
    //         title: `Card ${cards.lenght + 1}`,
    //         description: 'This is a new card',
    //     };
    //     setCards([...cards,newCard])
    // };


    return (
    <ScrollView>
      <Cards title="Card 1" description="This is the first card" />
      <Cards title="Card 2" description="This is the second card" />
      <Cards title="Card 3" description="This is the third card" />
    </ScrollView>
  );
};


export default Forumscreen;