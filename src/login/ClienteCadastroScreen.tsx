import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function ClienteCadastroScreen(): JSX.Element {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function cadastro() {
        const dados = {
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password,
        }

        console.log(dados)
    }

    return (
        <ScrollView style={{ height: '100%', width: "auto" }}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('../assets/images/cliente.png')} />
                <View style={styles.card}>

                    <Text style={styles.title}>Cadastro Cliente</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor={"#000000"}
                        onChangeText={(textNome) => setNome(textNome)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor={"#000000"}
                        keyboardType="email-address"
                        onChangeText={(textEmail) => setEmail(textEmail)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Celular"
                        placeholderTextColor={"#000000"}
                        keyboardType="phone-pad"
                        onChangeText={(textCelular) => setCelular(textCelular)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Cpf"
                        placeholderTextColor={"#000000"}
                        keyboardType="numeric"
                        onChangeText={(textCpf) => setCpf(textCpf)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="DataNascimento"
                        placeholderTextColor={"#000000"}
                        onChangeText={(textDataNascimento) => setDataNascimento(textDataNascimento)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        placeholderTextColor={"#000000"}
                        onChangeText={(textCidade) => setCidade(textCidade)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        placeholderTextColor={"#000000"}
                        onChangeText={(textEstado) => setEstado(textEstado)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="País"
                        placeholderTextColor={"#000000"}
                        onChangeText={(textEstado) => setEstado(textEstado)}
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Rua"
                        placeholderTextColor="#151413"
                        onChangeText={(textRua) => setRua(textRua)}
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Numero"
                        placeholderTextColor="#151413"
                        keyboardType="numeric"
                        onChangeText={(textNumero) => setNumero(textNumero)}
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Bairro"
                        placeholderTextColor="#151413"
                        onChangeText={(textBairro) => setBairro(textBairro)}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cep"
                        placeholderTextColor="#151413"
                        onChangeText={(textCep) => setCep(textCep)}
                        secureTextEntry

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Complemento"
                        placeholderTextColor="#151413"
                        onChangeText={(textComplemento) => setComplemento(textComplemento)}
                        secureTextEntry

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#151413"
                        onChangeText={(textPassword) => setPassword(textPassword)}
                        secureTextEntry
                    />



                    <TouchableOpacity
                        onPress={() => { cadastro() }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Não possui conta? Cadastre-se!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1BB80',

    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0,3)',
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        marginTop: 0
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        textAlign: 'center'

    },
    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFEFD5',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#5263F3',
        borderRadius: 15,
        height: 40
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },
    forgotPassword: {
        color: '#F76900',
        textAlign: 'center',
        marginTop: 10,
    },
    inputIcon: {
        width: 5,
        height: 5,
        marginRight: 10,
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        paddingLeft: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }

});

export default ClienteCadastroScreen