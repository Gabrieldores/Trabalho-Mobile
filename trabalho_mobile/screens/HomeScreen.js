// HomeScreen.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const userName = route.params?.userName || 'Seu Nome';

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.greeting}>Olá, {userName}</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Content Cards */}
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('OferecerCarona')}
        >
          <Image
            source={require('../assets/oferecer-carona.png.png')}
            style={styles.cardImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Caronas')}
        >
          <Image
            source={require('../assets/caronas-disponiveis.png.png')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FA',
  },
  header: {
    height: 56,
    backgroundColor: '#0B1F3E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#66A69B',
  },
  greeting: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#66A69B',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    // Shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation Android
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
