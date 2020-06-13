import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

export default function profile() {
    return (
        <View>
            <Image source={{ uri: "https://gitlab.elasticstats.com/uploads/-/system/user/avatar/15/doge.png" }} />
        </View>
    );
};