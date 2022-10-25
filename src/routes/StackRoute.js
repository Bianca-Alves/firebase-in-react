import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

const stack = createStackNavigator();

export default function StackRoute() {
    return (
        <stack.Navigator>
            <stack.Screen name='home' component={Home}></stack.Screen>
            <stack.Screen name='details' component={Details}></stack.Screen>
        </stack.Navigator>
    )
}