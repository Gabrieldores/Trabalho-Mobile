// CaronasScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockCaronas = [
  {
    id: '1',
    nome: 'Ana Oliveira',
    saida: 'Rua Rio de Janeiro, Centro',
    chegada: 'PUC Minas São Gabriel',
    horario: '12/05 08:30',
  },
  {
    id: '2',
    nome: 'Lucas Silva',
    saida: 'PUC Minas São Gabriel',
    chegada: 'Rua Matipo, Lourdes',
    horario: '13/05 17:45',
  },
  // ... mais caronas
];

const USUARIOS = ['Passageiro', 'Motorista'];

export default function CaronasScreen({ navigation }) {
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardInfo}>Saída: {item.saida}</Text>
      <Text style={styles.cardInfo}>Chegada: {item.chegada}</Text>
      <Text style={styles.cardTime}>{item.horario}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com voltar + título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#888" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Caronas</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Filtro de tipo de usuário (dropdown caseiro) */}
      <TouchableOpacity
        style={styles.pickerWrapper}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: tipoUsuario ? '#0B1F3E' : '#339999' }}>
          {tipoUsuario || 'Tipo de usuário'}
        </Text>
      </TouchableOpacity>

      {/* Lista de caronas */}
      <FlatList
        data={mockCaronas.filter(c => {
          // filtrar por tipo de usuário, se desejar
          return true;
        })}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Modal de seleção de tipo */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <FlatList
              data={USUARIOS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setTipoUsuario(item);
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
  container: {
    flex: 1,
    backgroundColor: '#F4F8FA',
  },
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
  pickerWrapper: {
    marginHorizontal: 16,
    height: 48,
    backgroundColor: '#D3E0DE',
    borderWidth: 1,
    borderColor: '#339999',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  list: {
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#339999',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B1F3E',
    marginBottom: 4,
  },
  cardInfo: {
    fontSize: 14,
    color: '#0B1F3E',
    marginBottom: 2,
  },
  cardTime: {
    fontSize: 12,
    color: '#0B1F3E',
    textAlign: 'right',
    marginTop: 8,
  },
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
