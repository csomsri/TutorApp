import React from 'react';
import {Text, View,  ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
    title : string
    description : string
}

const Card = (props : Props) => {
    return(
        <View style={styles.card}>
            <Text style={styles.title}>This is lowk a card fr</Text>
            <Text style={styles.detail}>This is cool asf</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#1338be',
        borderRadius: 10,
        elevation : 2,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
    },
    
    detail: {
        fontSize: 11,
        marginBottom: 4,
    }
});