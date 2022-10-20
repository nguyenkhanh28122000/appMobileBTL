import { View, Text } from 'react-native';
import React from 'react';

import styles from './stylesLogin';
import InputItem from '~/conponent/Input/Input';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>khanh</Text>
            <InputItem placeholder="email" />
        </View>
    );
};

export default Login;
