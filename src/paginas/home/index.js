import { Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react'
import CardAluno from '../../componentes/cardAluno';
import firebase from '../../firebaseConnection';

export default function Home() {

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {

        async function buscarAluno() {

            await firebase.database().ref('alunos').on('value', (snapshot) => {

                snapshot.forEach((childItem) => {

                    var data = {
                        key: childItem.key,
                        nome: childItem.val().Nome,
                        nota1: childItem.val().Nota1,
                        nota2: childItem.val().Nota2,
                        nota3: childItem.val().Nota3,
                        imagem: childItem.val().Imagem
                    }

                    setAlunos(alunos => [...alunos, data]);
                })
            })
        }

        buscarAluno();

    }, [])

    return (

        <View style={{ alignItems: 'center' }}>

            <Text style={{ fontSize: 25, margin: 30 }}>Lista de Alunos</Text>

            <FlatList
                data = {alunos}
                numColumns = {1}
                keyExtractor = {item => item.key}
                renderItem = { ({item}) => <CardAluno imagem={item.imagem} nome={item.nome} nota1={item.nota1} nota2={item.nota2} nota3={item.nota3} />}
            />

        </View>
    );
}