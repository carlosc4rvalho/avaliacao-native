import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatBubble = ({ nomeUsuario, mensagemTexto, remetente, filtro }) => {
  const horaEnvio = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const shouldDisplayMessage = () => {
    if (filtro === "Todos") {
      return true;
    } else if (filtro === "Alunos" && remetente === "Aluno") {
      return true;
    } else if (filtro === "Professores" && remetente === "Professor") {
      return true;
    }
    return false;
  };

  if (!shouldDisplayMessage()) {
    return null;
  }

  return (
    <View style={[styles.container, remetente === "usuario" ? styles.containerUsuario : styles.containerOutro]}>
      <Text style={styles.nome}>{nomeUsuario}</Text>
      <Text style={styles.texto}>{mensagemTexto}</Text>
      <Text style={styles.hora}>{horaEnvio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  containerOutro: {
    alignSelf: "flex-start",
    backgroundColor: "#ffff",
  },

  containerUsuario: {
    alignSelf: "flex-end",
    backgroundColor: "lightblue",
  },

  nome: {
    marginBottom: 5,
  },

  texto: {
    marginBottom: 5,
  },

  hora: {
    color: "#gray ",
  },
});

export default ChatBubble;