    import React from 'react';
    import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

    function ChangePass() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>

        <Text>Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your current password"
            secureTextEntry={true}
        />

        <Text>New Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your new password"
            secureTextEntry={true}
        />

        <Text>Confirm Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Confirm your new password"
            secureTextEntry={true}
        />

        <Button title="Reset" onPress={() => console.log('Reset password button pressed')} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: 300,
    },
    });

    export default ChangePass;