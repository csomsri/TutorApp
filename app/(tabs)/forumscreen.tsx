import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Cards from 'forumscreen.tsx';


const Homescreen = () => {
    const [cards, setCards] = useState<{ title: string, description: string}[]>([])
    
    const handleNewCard = () =>{
        const newCard = {
            title: `Card ${cards.lenght + 1}`,
            description: 'This is a new card',
        };
        setCards([...cards,newCard])
    };


    return (
        <ScrollView contentContainerStyle={{padding: 16}}>
            <TouchableOpacity title="Add Query" onPress={handleNewCard} />
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description}/>
            ))} 
        </ScrollView>
    );
};

export default Homescreen;