import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

import logo from '../../../assets/logo.png';
import Button from '../../components/Button';

export default function Signup() {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

   /* async */function handleSignup() {
        if (user, pass) {
            Alert.alert('Ok', 'tudo certo');
        } else {
            Alert.alert('Ops', 'não foi possivel criar seu cadastro');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize='none'//faz tudo ser caixa baixa
                    placeholder='Email'
                    onChangeText={(text) => { setUser(text) }}
                    style={styles.input}
                />
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize='none'//faz tudo ser caixa baixa
                    secureTextEntry={true}//ativa modo password
                    placeholder='Password'
                    onChangeText={(text) => { setPass(text) }}
                    style={styles.input}
                />
            </View>
            <Button
                style='outline'
                onPress={handleSignup}>
                <Text style={styles.text_primary}>
                    Entrar
                </Text>
            </Button>
        </View >
    );
}