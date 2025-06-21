// CadastroScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [campus, setCampus] = useState('');
  const [curso, setCurso] = useState('');
  const [senha, setSenha] = useState('');

  const handleSave = () => {
    // implementar lógica de salvar aqui
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#339999"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#339999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Celular"
          placeholderTextColor="#339999"
          keyboardType="phone-pad"
          value={celular}
          onChangeText={setCelular}
        />

        <TextInput
          style={styles.input}
          placeholder="Instituição de Ensino"
          placeholderTextColor="#339999"
          value={instituicao}
          onChangeText={setInstituicao}
        />

        <TextInput
          style={styles.input}
          placeholder="Campus"
          placeholderTextColor="#339999"
          value={campus}
          onChangeText={setCampus}
        />

        <TextInput
          style={styles.input}
          placeholder="Curso"
          placeholderTextColor="#339999"
          value={curso}
          onChangeText={setCurso}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#339999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FA',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0B1F3E',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    flex: 1,
  },
  input: {
    height: 48,
    backgroundColor: '#D3E0DE',
    borderWidth: 1,
    borderColor: '#339999',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#0B1F3E',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  backText: {
    fontSize: 16,
    color: '#0B1F3E',
  },
  saveButton: {
    backgroundColor: '#00B172',
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  saveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
