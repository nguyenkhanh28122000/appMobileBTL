import { View, StyleSheet } from 'react-native';
import Login from '~/pages/login/login.js';

export default function App() {
    return (
        <View style={styles.container}>
            <Login />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
