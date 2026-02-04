import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'

const GROQ_API_KEY = "COLOQUE_SUA_CHAVE_AQUI"

export default function App() {
  const [ingredientes, setIngredientes] = useState('')
  const [receita, setReceita] = useState('')

  const api = axios.create({
    baseURL: 'https://api.groq.com/openai/v1',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GROQ_API_KEY}`
    }
  })

  async function gerarReceita() {

    console.log("ola")

    const resposta = await api.post('/chat/completions', {
      model: 'llama-3.1-8b-instant',
      temperature: 1,
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content: `Você é um chef criativo. Crie receitas simples e deliciosas com os ingredientes fornecidos. Responda em portugues do Brasil.
        
        Use este formato:
        🍽️ [NOME DA RECEITA EM MAIUSCULO]

        🕛 Tempo: [tempo de preparo]
        👥 Porções: [quantidade]

        📝 INGREDIENTES:
        • [ingrediente 1]
        • [ingrediente 2]
        • [etc]

        🧑‍🍳 MODO DE PREPARO:
        1. [passo 1]
        2. [passo 2]
        3. [etc]

        💡DICA: [uma dica especial sobre a receita]`
        },
        {
          role: 'user',
          content: `Crie uma receita com esses ingredientes: ${ingredientes}`
        }
      ],
    })

    setReceita(resposta.data.choices[0].message.content)

  }




  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.emoji}>👨🏻‍🍳</Text>
        <Text style={styles.title}>Chef IA CLDev</Text>
        <Text style={styles.subTitle}>Digite os ingredientes que você tem</Text>
      </View>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder='Ex: frango, arroz, tomate, cebola...'
        multiline
        placeholderTextColor="#888"
        value={ingredientes}
        onChangeText={setIngredientes}
      />

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={gerarReceita}
      >
        <Text style={styles.buttonText}>Gerar Receita</Text>
      </TouchableOpacity>

      {/* Receita */}
      {receita ? (
        <View style={styles.receitaWrapper}>
          <View style={styles.receitaHeader}>
            <Text style={styles.receitaHeaderText}>Sua Receita</Text>
          </View>
          <ScrollView style={styles.receitaContainer}>
            <Text style={styles.receita}>{receita}</Text>
          </ScrollView>

        </View>
      ) : (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderEmoji}>🍲</Text>
          <Text style={styles.placeholderText}>Sua Receita aparecerá aqui</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 20
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  input: {
    backgroundColor: '#2d2d44',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#e17055',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  receitaWrapper: {
    flex: 1,
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#2d2d44'
  },
  receitaHeader: {
    backgroundColor: '#e17055',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  receitaHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  receitaContainer: {
    flex: 1,
    padding: 20,
  },
  receita: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderEmoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
  },


});
