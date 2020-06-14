import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import logo from '../../../assets/logo.png';
import Button from '../../components/Button';
//import Firebase from '../../services/Firebase';

export default function Login({ navigation }) {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

   /* async function handleSignIn() {
        if (user, pass) {
            Firebase.auth()
                .createUserWithEmailAndPassword(user, pass)
                .then((response) => {
                    Alert.alert('Ok', 'tudo certo');
                    navigation.navigate('Index')
                })
                .catch((error) => {
                    Alert.alert('Desculpe', 'Não foi possivel criar sua conta.');
                });
        } else {
            Alert.alert('Ops', 'não foi possivel criar seu cadastro');
        }
    }
    */
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
                //onPress={handleSignIn}
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