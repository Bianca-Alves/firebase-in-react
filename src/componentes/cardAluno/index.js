import { Text, Image, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";

export default function CardAluno({imagem, nome, nota1, nota2, nota3}) {

    const navigation = useNavigation();

    function irDetalhes(){
        navigation.navigate('Detalhes', {imagem:imagem, nome:nome, nota1:nota1, nota2:nota2, nota3:nota3});
    }

    return (

        <TouchableOpacity onPress={irDetalhes} style={styles.container}>
            <View style={styles.element}>
                <Image source={{ uri: imagem }} style={styles.imagem} />
                <Text style={styles.text}>{nome}</Text>
                <Text style={styles.text}>{nota1}</Text>
                <Text style={styles.text}>{nota2}</Text>
                <Text style={styles.text}>{nota3}</Text>
            </View>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%'
    },

    imagem: {
        width: 100,
        height: 100,
        borderRadius: '10px'
    },

    text: {
        width: '100%',
        textAlign: 'center',
        margin: 15
    },

    element: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '10px',
        padding: '20px',
        borderRadius: '10px'
    }

})