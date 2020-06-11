import React from 'react';
import { View, Image, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Navigation from './Navigation';

import styles from './styles';


const Drawer = createDrawerNavigator();

export default function Index() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Navigation'
                component={Navigation} />
        </Drawer.Navigator>
    );
}