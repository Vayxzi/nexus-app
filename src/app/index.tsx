import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Cabecera Azul */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>⚡</Text>
            <Text style={styles.logoText}>nexus</Text>
        </View>
        <Text style={styles.greeting}>Hola, Valle!</Text>
        <Text style={styles.date}>26 de Septiembre de 2026</Text>
      </View>

      {/* Cuerpo de la App con fondo claro */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* Sección de Zonas Guardadas */}
          <Text style={styles.sectionTitle}>Vista de zonas guardadas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            
            {/* Tarjeta Mi Casa */}
            <View style={styles.zoneCard}>
              <View style={styles.zoneHeader}>
                <Text style={styles.locationIcon}>📍</Text>
                <View>
                  <Text style={styles.zoneTitle}>Mi Casa</Text>
                  <Text style={styles.zoneSubtitle}>(Santa Tecla)</Text>
                </View>
              </View>
              <View style={styles.statusIcons}>
                <View style={styles.statusItem}>
                    <Text style={styles.serviceIcon}>💧</Text>
                    <Text style={styles.okText}>OK</Text>
                </View>
                <View style={styles.statusItem}>
                    <Text style={styles.serviceIcon}>⚡</Text>
                    <Text style={styles.okText}>OK</Text>
                </View>
              </View>
            </View>
            
            {/* Tarjeta Mi Trabajo */}
            <View style={styles.zoneCard}>
              <View style={styles.zoneHeader}>
                <Text style={styles.locationIcon}>📍</Text>
                <View>
                  <Text style={styles.zoneTitle}>Mi Trabajo</Text>
                  <Text style={styles.zoneSubtitle}>(San Salvador)</Text>
                </View>
              </View>
              <View style={styles.statusIcons}>
                <View style={styles.statusItem}>
                    <Text style={styles.serviceIcon}>💧</Text>
                    <Text style={styles.okText}>OK</Text>
                </View>
                <View style={styles.statusItem}>
                    <Text style={styles.serviceIcon}>⚡</Text>
                    <Text style={styles.okText}>OK</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Sección de Alertas Recientes */}
          <Text style={styles.sectionTitle}>Feed de alertas recientes</Text>
          
          {/* Tarjeta de Alerta - CAESS */}
          <View style={[styles.alertCard, styles.alertOrange]}>
            <Text style={styles.alertTitle}>⚠️ CORTE DE LUZ PROGRAMADO</Text>
            <Text style={styles.alertCompany}>CAESS (San Salvador Central)</Text>
            <Text style={styles.alertTime}>Hora - 1:33 PM</Text>
          </View>

          {/* Tarjeta de Alerta - ANDA */}
          <View style={styles.alertCard}>
            <View style={styles.alertRow}>
                <Text style={styles.blueWaterIcon}>💧</Text>
                <View>
                    <Text style={[styles.alertTitle, {color: '#003366'}]}>CORTE DE AGUA - ANDA</Text>
                    <Text style={styles.alertSubtitle}>(Fuga en tubería - Escalón)</Text>
                    <Text style={styles.alertDetails}>Details: ANDA</Text>
                    <Text style={styles.alertDetails}>Details: Fuga en tubería - Escalón</Text>
                </View>
            </View>
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00478F', // Azul oscuro de la cabecera
  },
  header: {
    padding: 20,
    paddingTop: 60, // Espacio para la barra de estado
  },
  logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  logoIcon: {
      fontSize: 28,
      marginRight: 5,
  },
  logoText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
  },
  date: {
    color: '#D1E3F8',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#F5F7FA', // Color de fondo claro
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#000',
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  zoneCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginRight: 15,
    minWidth: 160,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2, // Para Android
  },
  zoneHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 15,
  },
  locationIcon: {
      fontSize: 20,
      marginRight: 8,
  },
  zoneTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  zoneSubtitle: {
    color: '#666',
    fontSize: 12,
  },
  statusIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statusItem: {
      alignItems: 'center',
  },
  serviceIcon: {
      fontSize: 24,
      marginBottom: 5,
  },
  okText: {
      color: '#4CAF50', // Verde
      fontWeight: 'bold',
      fontSize: 12,
  },
  alertCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  alertOrange: {
    backgroundColor: '#F27D16', // Naranja
  },
  alertTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  alertCompany: {
    color: '#fff',
    fontSize: 14,
    marginTop: 2,
  },
  alertTime: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
  },
  alertRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  blueWaterIcon: {
      fontSize: 28,
      marginRight: 15,
  },
  alertSubtitle: {
      color: '#003366',
      fontSize: 14,
      marginBottom: 5,
  },
  alertDetails: {
    color: '#444',
    fontSize: 13,
  }
});