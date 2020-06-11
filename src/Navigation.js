import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()

import Home from './view/Home';
import Login from './view/Login';
import Signup from './view/Signup';
import RedefinePass from './view/redefinePass';

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home} />
                <Stack.Screen
                    name="Login"
                    component={Login} />
                <Stack.Screen
                    name="Signup"
                    component={Signup} />
                <Stack.Screen
                    name="RedefinePass"
                    component={RedefinePass} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}