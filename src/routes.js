import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Countrylist from './pages/countrylist';
import Weatherdata from './pages/weatherdata';

const Stack = createStackNavigator();

const Mainnavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="countrylist" component={Countrylist} />
        <Stack.Screen name="weather" component={Weatherdata} />
    </Stack.Navigator>
}

export default Mainnavigation;