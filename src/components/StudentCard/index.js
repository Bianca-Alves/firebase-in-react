import {Text, Image, TouchableOpacity, View, StyleSheet} from 'react-native'
import React from 'react'

export default function StudentCard({img, name, note1, note2, note3}) {
    
    return (
        <View style={styles.container}>
            <Image resizeMode='cover' source={{uri:img}} style={styles.img} />
            <Text style={styles.text}> {name}</Text>
            <Text style={styles.text}> {note1}</Text>
            <Text style={styles.text}> {note2}</Text>
            <Text style={styles.text}> {note3}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        width: '70%',
        minWidth: 320,
        maxWidth: 700,  
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,

    },
    img: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
    text: {
        width: '100%',
        textAlign: 'center',
        
    }
})