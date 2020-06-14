import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';


const listProduct = [
  {
    id: '1',
    name: 'TV',
    price: '1275.27',
    conditon: 'Novo'
  },
  {
    id: '2',
    name: 'TV',
    price: '1275.27',
    conditon: 'Novo'
  },
  {
    id: '3',
    name: 'TV',
    price: '1275.27',
    conditon: 'Novo'
  }
];

function Item({ item }) {
  return (
    <TouchableOpacity>
      <Image />
      <View>
        <Text>
          Nome
        </Text>
        <Text>
        </Text>
        <Text>
          Preço
        </Text>
        <Text>
          Parcelamento
        </Text>
        <Text>
          Condition
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_results}>
        Produtos encontrados: {listProduct.length}
      </Text>
      <FlatList
        data={listProduct}
        render={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView >
  );
}