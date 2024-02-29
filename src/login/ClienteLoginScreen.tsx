import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function ClienteLoginScreen(): JSX.Element{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function login(){
        const dados = {
            email:email,
            password:password,
        }

        console.log(dados)
    }

    return(
        <View style={styles.container}>
    
        
            <Image
            style = {styles.logo} 
            resizeMode="contain"
            source={require('../assets/images/cliente.png')}/>
           <View style = {styles.card}>
            
        <Text style = {styles.title}>Login Cliente</Text>
       
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={"#000000"}
          onChangeText={(textEmail) => setEmail(textEmail)}
        />
           

            <TextInput
            style = {styles.input}
            placeholder="Senha"
            placeholderTextColor="#151413"
            onChangeText={(textPassword) => setPassword(textPassword)}
            secureTextEntry

             />
            <TouchableOpacity 
            onPress={()=>{login()}}
            style = {styles.button}>
                <Text style = {styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style = {styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style = {styles.forgotPassword}>Não possui conta? Cadastre-se!</Text>
            </TouchableOpacity>
        </View>
        </View> 
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ECDCC9',
        
    },
    card: {
        backgroundColor: '#FFFFFF',
        width:300,
        borderRadius:10,
        padding:20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0,3)',
        shadowOpacity:0.8,
        shadowRadius:2
    },
    logo:{
        width:100,
        height:100,
        marginBottom:20,
        marginTop:-150
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'#151413',
        textAlign:'center'
        
    },
    input:{
        backgroundColor:'#D7D4D1',
        height:40,
        marginBottom:20,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#FFEFD5',
        paddingHorizontal:10,
    },
    button:{
        backgroundColor:'#5263F3',
        borderRadius:15,
        height:40
    },
    buttonText:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:16,
        lineHeight:40
    },
    forgotPassword:{
        color: '#F76900',
        textAlign:'center',
        marginTop:10,
  },
  inputIcon: {
    width:  5,
    height:  5,
    marginRight:  10,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:  1,
    borderColor: '#000000',
    borderRadius:  5,
    paddingLeft:  10,
  },
  image:{
    flex: 1,
    justifyContent: 'center',
  }

}); 

export default ClienteLoginScreen;