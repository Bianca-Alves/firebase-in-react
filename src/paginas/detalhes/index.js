import { useRoute } from '@react-navigation/native';
import React from 'react'

import {View,Text} from 'react-native'




export default function Detalhes(){
const routes = useRoute();
return(

    <View>

    <Text> Detalhes </Text>
    <Text>{routes.params?.nome}</Text>
    <Text>{routes.params?.email}</Text>

    </View>


);


}