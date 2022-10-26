import { Text, Image, View, StyleSheet } from "react-native";
import React from "react";

export default function CardAluno({imagem, nome, nota1, nota2, nota3}) {

    return (

        <View style={styles.container}>
            <Image source={{ uri: imagem }} style={styles.imagem} />
            <Text style={styles.text}>{nome}</Text>
            <Text style={styles.text}>{nota1}</Text>
            <Text style={styles.text}>{nota2}</Text>
            <Text style={styles.text}>{nota3}</Text>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%',  
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    imagem: {
        width: 100,
        height: 100,
        marginBottom: 10
    },

    text: {
        width: '100%',
        textAlign: 'center',
        margin: 15
    }

})