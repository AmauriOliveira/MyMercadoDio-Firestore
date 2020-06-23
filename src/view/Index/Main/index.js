import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
//import Firebase from '../../../services/firebase';
import styles from './styles';

/* async function gravar() {
  const db = Firebase.firestore();
  await db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
} */
export default function Main() {
  // gravar();
  return (
    <View style={styles.container}>
      <Text>Página Principal</Text>
    </View>
  );
}