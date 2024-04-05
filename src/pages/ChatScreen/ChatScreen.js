import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const ChatScreen = () => {
  const [filtro, setFiltro] = useState("Todos");

  const handleFiltro = (novoFiltro) => {
    setFiltro(novoFiltro);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#0051FF", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={() => handleFiltro("Todos")}>
          <Text style={{ color: "#FFF" }}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#0051FF", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={() => handleFiltro("Alunos")}>
          <Text style={{ color: "#FFF" }}>Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#0051FF", padding: 16, marginBottom: 16, borderRadius: 8 }} onPress={() => handleFiltro("Professores")}>
          <Text style={{ color: "#FFF" }}>Professores</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, padding: 16 }}>
        <ChatBubble nomeUsuario="Carlos" mensagemTexto="olá mundo" remetente="Aluno" filtro={filtro} />
        <ChatBubble nomeUsuario="Guilherme" mensagemTexto="olá mundo" remetente="usuario" filtro={filtro} />
        <ChatBubble nomeUsuario="Prof. Ronan Lopes" mensagemTexto="olá mundo" remetente="Professor" filtro={filtro} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1, borderRadius: 8, padding: 16, backgroundColor: "#FFFF" }}
          placeholder="Digite sua mensagem..."
        />
      </View>
    </View>
  );
};

export default ChatScreen;