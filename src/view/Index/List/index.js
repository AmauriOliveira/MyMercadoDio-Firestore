import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Firebase from '../../../services/firebase';

import styles from './styles';


function Item({ item }) {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("InfoProduct")}
        >
            <Image style={styles.picture} source={{ uri: item.picture }} />
            <View style={styles.title}>
                <Text style={styles.item_title}>
                    {item.name}
                </Text>
                <Text style={styles.item_price}>
                    R$ {item.price.toFixed(2)}
                </Text>
                <Text style={styles.item_subdivision}>
                    Parcelado em 12 x <Text style={styles.item_subdivision_detach}>
                        R${(item.price / 12).toFixed(2)}
                    </Text>
                </Text>
                <Text>
                    {item.condition}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default function List() {

    const ref = Firebase.firestore().collection('product');

    const product = ref.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {

            const { name, price, condition, picture } = doc.data();
            list.push({
                id: doc.id,
                name,
                price,
                condition,
                picture
            });
        });

        return list;
    });

    return (
        <>
            <Text style={styles.text_results}>
                Produtos encontrados: {product.length}
            </Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={product}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    );
}