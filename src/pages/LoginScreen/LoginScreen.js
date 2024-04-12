import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../services/firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginPress() {
    const users = collection(db, 'users');
    const queryEmail = query(users, where("email", "==", email));
  
    const querySnapshot = await getDocs(queryEmail);
  
    if (!querySnapshot.empty) {
      querySnapshot.forEach(doc => {
        const userData = doc.data();
        if (userData.password === password) {
          console.log("logado");
          navigation.navigate("chat");
        } else {
          console.log("senha incorreta!");
        }
      });
    } else {
      console.log("Usuário não encontrado");
    }
  };  

  const handleCadastroPress = () => {
    navigation.navigate('cadastro');
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 32 }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Login</Text>

      <TextInput
        style={{ width: "100%", backgroundColor: "#FFF", padding: 16, marginBottom: 16, borderRadius: 8 }}
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{ width: "100%", backgroundColor: "#FFF", padding: 16, marginBottom: 16, borderRadius: 8 }}
        value={password}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={{ alignItems: "center", width: "100%", backgroundColor: "#0051FF", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={handleLoginPress}>
        <Text style={{ color: "#FFF" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center", width: "100%", backgroundColor: "lightblue", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={handleCadastroPress}>
        <Text style={{ color: "#FFF" }}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};