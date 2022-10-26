import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Routes from './StackRoutes';
import Sobre from '../paginas/sobre/';
import Cadastrar from '../paginas/Cadastrar';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1F6FEB",
        tabBarInactiveTintColor: '#8B948E',
        tabBarStyle: {
          backgroundColor: "#0D1117"
        }

      }}>

      <Tab.Screen name="HomeStack" component={Routes}
        options={{
          tabBarIcon: ({ color, size }) => {

            return <Ionicons name="home-sharp" size={size} color={color} />

          }

        }} />

      <Tab.Screen name="Cadastrar" component={Cadastrar}
        options={{
          tabBarIcon: ({ color, size }) => {

            return <Entypo name="add-user" size={size} color={color} />

          }

        }} />

      <Tab.Screen name="Sobre" component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => {

            return <Ionicons name="information-circle-outline" size={size} color={color} />

          }

        }} />

    </Tab.Navigator>

  );

}