import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

import logo from '../../../assets/logo.png';
import Button from '../../components/Button';
import Firebase from '../../services/firebase';

export default function Login({ navigation }) {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    async function handleSignIn() {
        if (user, pass) {
            Firebase.auth()
                .signInWithEmailAndPassword(user, pass)
                .then((response) => {
                    Alert.alert('Ok', 'tudo certo');
                    navigation.navigate('Index', { response })
                })
                .catch((error) => {
                    Alert.alert('Desculpe', 'Não foi possivel fazer login, verefique a o login e a senha e tente novamente.');
                });
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
                // onPress={() => { navigation.navigate('Index') }}>
                onPress={handleSignIn}>
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