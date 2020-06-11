import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import logo from '../../../assets/logo.png';
import Button from '../../components/Button';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize='none'//faz tudo ser caixa baixa
                    placeholder='Email'
                    style={styles.input}
                />
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize='none'//faz tudo ser caixa baixa
                    placeholder='Email'
                    style={styles.input}
                />
            </View>
            <Button
                style='outline'
                onPress={() => { navigation.navigate('Index') }}>
                <Text style={styles.text_primary}>
                    Entrar
                </Text>
            </Button>
            <TouchableOpacity style={styles.redefinePass}>
                <Text
                    onPress={() => { navigation.navigate('RedefinePass') }}
                    style={styles.text_primary}>
                    Esqueceu a senha?
                </Text>
            </TouchableOpacity>
        </View >
    );
}