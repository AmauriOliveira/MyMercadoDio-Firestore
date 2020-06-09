import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()

import Home from './view/Home';

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}