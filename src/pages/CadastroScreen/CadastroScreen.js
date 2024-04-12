import React, { useState } from "react";
import { View, Text, Alert, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firebaseConfig";

const cadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCadastroPress() {
    if (!email.includes("@ifpr") && password !== "") {
      Alert.alert("Erro", "Você precisa de um email '@ifpr' e senha para fazer login.");
    } else {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          email,
          password
        });
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate("chat");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    console.log(`email: ${email}, senha: ${password}`);
  };

  const handleloginPress = () => {
    navigation.navigate("login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 32 }}>
      <Text style={{ fontSize: 30, marginBottom: 20, }}>Cadastro</Text>

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

      <TouchableOpacity style={{ alignItems: "center", width: "100%", backgroundColor: "lightblue", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={handleCadastroPress}>
        <Text style={{ color: "#FFF", }}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center", width: "100%", backgroundColor: "#0051FF", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={handleloginPress}>
        <Text style={{ color: "#FFF", }}>Inscreva-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default cadastroScreen;