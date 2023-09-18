    import React, { Component } from "react";
    import { View, Text, TextInput, Button,Image,StyleSheet } from "react-native";

    class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        password: "",
        };
    }

    handleLogin = () => {
        // Aquí puedes agregar la lógica de autenticación, como enviar los datos al servidor.
        // se imprime los valores en la consola.
        console.log("Nombre de usuario:", this.state.username);
        console.log("Contraseña:", this.state.password);
    };

    render() {
        return (
        <View style={styles.container}>
            <Image
          source={require('../assets/Logo.png')} // Ruta a tu imagen en la carpeta assets
            style={styles.logo}
            />
            <Text style={styles.text}>Login</Text>
            <Text style={styles.label}>Nombre de usuario:</Text>
            <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            />

            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
            />

            <Button title="Iniciar sesión" onPress={this.handleLogin} />
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
    label: {
        fontSize: 16,
        marginBottom: 8,
        color:'#fff'
    },
    text: {
        fontSize: 30,
        marginBottom: 8,
        color:'#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width:300,
        color:'#ffff'
    },
    logo: {
        width: 150, // Ancho de la imagen
        height: 250, // Alto de la imagen
        marginBottom: 20, // Espacio debajo de la imagen
    },
    });

    export default Login;
