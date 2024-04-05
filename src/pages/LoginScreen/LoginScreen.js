import React, { useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { TouchableOpacity } from "react-native-web";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (email.includes('@ifpr') && password !== '') {
      console.log("logado");
      navigation.navigate('chat');
    }
    else {
      Alert.alert("Erro", "Você precisa de um email '@ifpr' e senha para fazer login.");
    }
  };

  const handleCadastroPress = () => {
    navigation.navigate('cadastro');
  };

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 32}}>
      <Text style={{fontSize: 30, marginBottom: 20}}>Login</Text>
      
      <TextInput
        style={{width: "100%", backgroundColor: "#FFF", padding: 16, marginBottom: 16, borderRadius: 8}}
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{width: "100%", backgroundColor: "#FFF", padding: 16, marginBottom: 16, borderRadius: 8}}
        value={password}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={{alignItems: "center", width: "100%", backgroundColor: "#0051FF", padding: 16, marginBottom: 16, borderRadius: 8}} onPress={handleLoginPress}>
        <Text style={{color: "#FFF"}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: "center", width: "100%", backgroundColor: "lightblue", padding: 16, marginBottom: 16, borderRadius: 8}} onPress={handleCadastroPress}>
        <Text style={{color: "#FFF"}}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;