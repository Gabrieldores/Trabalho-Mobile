import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function OferecerCaronaScreen() {
  const [localPartida, setLocalPartida] = useState('');
  const [diasSemana, setDiasSemana] = useState('');
  const [numeroVagas, setNumeroVagas] = useState('');
  const [horario, setHorario] = useState('');
  const [destino, setDestino] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Local de Partida"
        value={localPartida}
        onChangeText={setLocalPartida}
      />
      <TextInput
        style={styles.input}
        placeholder="Dias da Semana"
        value={diasSemana}
        onChangeText={setDiasSemana}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Vagas"
        value={numeroVagas}
        onChangeText={setNumeroVagas}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
      />
      <TextInput
        style={styles.input}
        placeholder="Destino"
        value={destino}
        onChangeText={setDestino}
      />
      <Button title="Oferecer Carona" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});
