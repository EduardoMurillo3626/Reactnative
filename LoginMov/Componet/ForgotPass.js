    import React from 'react';
    import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';

    function ForgotPass() {
    return (
        <View style={styles.container}>
            <Image
             source={require('../assets/Logo.png')} // Ruta a tu imagen en la carpeta assets
            style={styles.logo}></Image>
        <Text style={styles.title}>Forgot Password</Text>
        
        <Text style={styles.email}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Navigate to login screen')}>
            <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        justifyContent: "center",
        alignItems: "center", // Centra verticalmente y horizontalmente
        padding: 80,
    },
    logo: {
            width: 150, // Ancho de la imagen
            height: 250, // Alto de la imagen
            marginBottom: 20, // Espacio debajo de la imagen
        },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'#fff'
    },
    email: {
        fontSize: 18,
        marginBottom: 20,
        color:'#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: 300,
        color:'#ffff'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 10,
        width: 300,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    loginLink: {
        marginTop: 20,
        textDecorationLine: 'underline',
        color: 'blue',
    },
    });

    export default ForgotPass;