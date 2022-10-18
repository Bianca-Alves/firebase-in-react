<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c975b36 (inserindo dados no firebase)
import React from 'react'

import {View,Text,} from 'react-native'




export default function Cadastrar(){

return(

    <View>

    <Text> CADASTRAR</Text>

    </View>


);


<<<<<<< HEAD
}
=======
}
=======
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from '../../firebaseConnection'
import React,{useState} from 'react'

export default function Cadastrar(){

    const [nome,setNome] = useState("");
    const [nota1,setNota1] = useState("");
    const [nota2,setNota2] = useState("");
    const [nota3,setNota3] = useState("");
    const [imagem,setImagem] = useState("");

    async function cadastrar(){

        const alunos = await firebase.database().ref('alunos');
        const chave = alunos.push().key;

        alunos.child(chave).set ({
            Nome: nome,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            Imagem: imagem
        })

    }

    return(

        <View style = {estilos.container}>
            <Text style = {{fontSize:30, fontWeight:'bold'}}>Cadastro de Alunos</Text>
            <Text style = {estilos.texto}>Nome :</Text>
            <TextInput style = {estilos.entradas} placeholder='Digite o nome do aluno' onChangeText={(texto) => setNome(texto)}></TextInput>
            <Text style = {estilos.texto}>Nota1 :</Text>
            <TextInput style = {estilos.entradas} placeholder='Digite a Nota 1 do aluno' onChangeText={(texto) => setNota1(texto)}></TextInput>
            <Text style = {estilos.texto}>Nota2 :</Text>
            <TextInput style = {estilos.entradas} placeholder='Digite a Nota 2 do aluno' onChangeText={(texto) => setNota2(texto)}></TextInput>
            <Text style = {estilos.texto}>Nota3 :</Text>
            <TextInput style = {estilos.entradas} placeholder='Digite a Nota 3 do aluno' onChangeText={(texto) => setNota3(texto)}></TextInput>
            <Text style = {estilos.texto}>Imagem :</Text>
            <TextInput style = {estilos.entradas} placeholder='Digite o link com a foto do aluno' onChangeText={(texto) => setImagem(texto)}></TextInput>
            <TouchableOpacity style = {estilos.botao} onPress={cadastrar}>
                <Text style = {{fontWeight:'bold '}}>Cadastrar</Text>
            </TouchableOpacity>
            <Text>{nome}</Text>
        </View>

    );

}

const estilos = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'

    },
    entradas :{
        width:'85%',
        height:30,
        borderWidth:2
    },
    botao:{
        width:'85%',
        height:60,
        alignItems:'center',
        backgroundColor:'orange',
        marginTop:20,
        justifyContent:'center',
        fontWeight:'bold'
    },
    texto:{
        marginTop:20,
        fontSize:15,
        fontWeight:'bold'


    }


})
>>>>>>> a4176f7 (inserindo dados no firebase)
>>>>>>> c975b36 (inserindo dados no firebase)
