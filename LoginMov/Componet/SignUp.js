    import React, { Component } from 'react';
    import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

    class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        email: '',
        password: '',
        };
    }

    validateForm = () => {
        const { name, email } = this.state;

        // Expresión regular para permitir solo letras (sin acentos)
        const lettersOnlyRegex = /^[A-Za-z]+$/;

        if (!lettersOnlyRegex.test(name)) {
        alert("Por favor, ingresa solo letras en el campo de Nombre.");
        return;
        }

        // Expresión regular para validar direcciones de correo de Hotmail y Gmail
        const emailRegex = /^(?=.*[@])(?=.*(hotmail\.com|gmail\.com))[\w@.-]+$/;

        if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo válida de Hotmail.com o Gmail.com.");
        return;
        }

        // Si la validación pasa, puedes enviar el formulario o realizar otras acciones aquí
        // En este ejemplo, simplemente se muestra una alerta
        alert("¡Formulario validado correctamente!");
    }

    render() {
        return (
        <View style={styles.container}>
            <Image
          source={require('../assets/Logo.png')} // Ruta a tu imagen en la carpeta assets
            style={styles.logo}></Image>
            <Text style={styles.heading}>SignUp</Text>

            <Text style={styles.text}>Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            />

            <Text style={styles.text}>Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            keyboardType="email-address"
            />

            <Text  style={styles.text}>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
            />

            <TouchableOpacity
            style={styles.button}
            onPress={this.validateForm}
            >
            <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>

            <Text>Already have an account? <Text style={styles.link}>Login</Text></Text>
        </View>
        );
    }
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
    heading: {
        fontSize: 30,
        marginBottom: 16,
        textAlign: 'center',
        color:'#fff'
    },
    text: {
        color:'#fff',
        padding:10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        color: '#ffff',
        width:300
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    });

    export default SignUp;