import React, {useState} from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import firebase from '../../firebaseConnection/index';

export default function Cadastrar(){

    const [nome, setNome] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [imagem, setImagem] = useState("");

    async function cadastrar(){
       const alunos = await firebase.database().ref('alunos');
       const chave = alunos.push().key;

       alunos.child(chave).set({
            Nome: nome,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            Imagem: imagem,
       })

    }
    
    return(
        <View style={styles.container}>  
            <View style={styles.containerInputs}>
                <Text style={styles.titulo}> Cadastro de Alunos</Text>

                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} placeholder="Digite o nome" onChangeText={(texto)=> setNome(texto)}/>

                <Text style={styles.label}>Nota 1:</Text>
                <TextInput style={styles.input} placeholder="Digite a primeira nota" onChangeText={(texto)=> setNota1(texto)}/>

                <Text style={styles.label}>Nota 2:</Text>
                <TextInput style={styles.input} placeholder="Digite a segunda nota" onChangeText={(texto)=> setNota2(texto)}/>

                <Text style={styles.label}>Nota 3:</Text>
                <TextInput style={styles.input} placeholder="Digite a terceira nota" onChangeText={(texto)=> setNota3(texto)}/>

                <Text style={styles.label}>Imagem:</Text>
                <TextInput style={styles.input} placeholder="Cole o link com a foto do aluno" onChangeText={(texto)=> setImagem(texto)}/>

                <TouchableOpacity style={styles.botao} onPress={cadastrar}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>


        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    containerInputs:{
        flex: 1,
        padding: 10,
    },
    titulo: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 50,
    },
    label:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
    },
    input:{
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
    },
    botao:{
        width: 250,
        padding: 10,
        marginTop: 25,
        backgroundColor: '#FD9F20',
        color: '#000',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textoBotao:{
        fontSize: 16,

    }

})

