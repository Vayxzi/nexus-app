import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function MapaScreen() {
  // Si estamos en el navegador web, mostramos el mensaje sin cargar el mapa nativo
  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mapa de Alertas</Text>
        </View>
        <View style={styles.mapContainer}>
          <View style={styles.webFallback}>
            <Text style={styles.webTitle}>🗺️ Mapa Nativo</Text>
            <Text style={styles.webText}>El mapa de NEXUS requiere el motor de Google/Apple Maps.</Text>
            <Text style={styles.webText}>Por favor, abre la app Expo Go en tu celular.</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Si estamos en el celular, requerimos la librería dinámicamente
  const MapView = require('react-native-maps').default;
  const { Marker } = require('react-native-maps');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mapa de Alertas</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 13.6929, 
            longitude: -89.2182,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
        >
          <Marker coordinate={{ latitude: 13.6980, longitude: -89.2180 }} title="⚠️ Corte Programado - CAESS" pinColor="orange" />
          <Marker coordinate={{ latitude: 13.7020, longitude: -89.2380 }} title="💧 Fuga de Agua - ANDA" pinColor="blue" />
          <Marker coordinate={{ latitude: 13.6769, longitude: -89.2797 }} title="📍 Mi Casa" description="Santa Tecla" pinColor="green" />
          <Marker coordinate={{ latitude: 13.7350, longitude: -89.0270 }} title="📍 Mi Novia" description="San Martín" pinColor="green" />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00478F' },
  header: { padding: 20, paddingTop: 60, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  mapContainer: { flex: 1, backgroundColor: '#F5F7FA', borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden' },
  map: { width: '100%', height: '100%' },
  webFallback: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  webTitle: { fontSize: 24, fontWeight: 'bold', color: '#00478F', marginBottom: 10 },
  webText: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 5 }
});