// OferecerCaronaScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

export default function OferecerCaronaScreen({ navigation }) {
  const [localPartida, setLocalPartida] = useState('');
  const [diasSemana, setDiasSemana] = useState('');
  const [vagas, setVagas] = useState('');
  const [horario, setHorario] = useState('');
  const [destino, setDestino] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleOffer = () => {
    // lógica para enviar oferta de carona
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#888" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Oferecer carona</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Formulário */}
      <ScrollView contentContainerStyle={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Local de Partida"
          placeholderTextColor="#339999"
          value={localPartida}
          onChangeText={setLocalPartida}
        />

        {/* Dropdown caseiro */}
        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: diasSemana ? '#0B1F3E' : '#339999' }}>
            {diasSemana || 'Dias da Semana'}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Número de Vagas"
          placeholderTextColor="#339999"
          keyboardType="numeric"
          value={vagas}
          onChangeText={setVagas}
        />

        <TextInput
          style={styles.input}
          placeholder="Horário"
          placeholderTextColor="#339999"
          value={horario}
          onChangeText={setHorario}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Destino"
          placeholderTextColor="#339999"
          value={destino}
          onChangeText={setDestino}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleOffer}>
          <Text style={styles.buttonText}>Oferecer</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de seleção de dia */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <FlatList
              data={DIAS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setDiasSemana(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FA' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#0B1F3E',
  },
  content: { padding: 16 },
  input: {
    height: 48,
    backgroundColor: '#D3E0DE',
    borderWidth: 1,
    borderColor: '#339999',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: { height: 120, textAlignVertical: 'top' },
  button: {
    height: 56,
    backgroundColor: '#00B172',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    padding: 32,
  },
  modalBox: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  modalText: {
    fontSize: 16,
    color: '#0B1F3E',
  },
});
