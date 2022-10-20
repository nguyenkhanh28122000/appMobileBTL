import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const InputItem = ({ placeholder }) => {
    return (
        <View style={styles.wrapper}>
            <TextInput placeholder={`nhập ${placeholder}`} style={styles.inputItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D6D6D6',

        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    inputItem: {
        fontSize: 14,
        fontWeight: 400,
    },
});

export default InputItem;
