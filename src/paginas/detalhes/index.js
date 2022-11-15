import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Detalhes(){

    const route = useRoute();

    function calcularMedia() {
        let nota1 = isNaN(route.params?.nota1) ? route.params?.nota1.length : route.params?.nota1
        let nota2 = isNaN(route.params?.nota2) ? route.params?.nota2.length : route.params?.nota2
        let nota3 = isNaN(route.params?.nota3) ? route.params?.nota3.length : route.params?.nota3
    
        return ((nota1 + nota2 + nota3) / 3)
    }
    
    let Status = <></>
    
    if (calcularMedia() > 6) {
        Status = <Text style={[styles.aprovado, styles.status]}>Aprovado</Text>
    } else {
        Status = <Text style={[styles.reprovado, styles.status]}>Reprovado</Text>
    }
    
    return(

        <View style={styles.container}>
            <View style={{ width: 'auto' }}>
                <Image source={{ uri: route.params?.imagem }} style={styles.imagem} />
                <View style={styles.flex}>
                    <Text style={styles.label}>Nome </Text>
                    <TextInput style={styles.input} value={route.params?.nome}/>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.label}>Nota 1</Text>
                    <TextInput style={styles.input} value={route.params?.nota1}/>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.label}>Nota 2</Text>
                    <TextInput style={styles.input} value={route.params?.nota2}/>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.label}>Nota 3</Text>
                    <TextInput style={styles.input} value={route.params?.nota3}/>
                </View>

                {Status}

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.update, styles.button]}>
                        <Text style={styles.textButton}>ATUALIZAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.delete, styles.button]}>
                        <Text style={styles.textButton}>DELETAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center'
    },

    imagem: {
        width: 350,
        height: 220,
        borderRadius: '10px',
        marginBottom: '20px'
    },

    label: {
        fontWeight: '400',
        width: '20%'
    },

    input: {
        borderColor: 'black',
        borderWidth: '2px',
        padding: '2px',
        width: '80%'
    },

    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20px'
    },

    status: {
        fontWeight: 700,
        fontSize: '20px',
        textAlign: 'center',
        marginTop: 10
    },

    aprovado: {
        color: 'green',
    },

    reprovado: {
        color: 'red',
    },

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '25px'
    },

    button: {
        textAlign: 'center',
        height: 40,
        width: 100,
        borderRadius: '3px'
    },

    update: {
        backgroundColor: 'green',
    },

    delete: {
        backgroundColor: 'red',
    },

    textButton: {
        color: 'white',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 40,
    }

})