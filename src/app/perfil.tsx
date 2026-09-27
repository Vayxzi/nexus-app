import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi Perfil</Text>
      </View>

      <View style={styles.body}>
        {/* Avatar e Info Principal */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>E</Text>
          </View>
          <Text style={styles.name}>Josue Valle</Text>
          <Text style={styles.email}>josue.valle@ejemplo.com</Text>
        </View>

        {/* Sección de Zonas Activas */}
        <View style={styles.infoCard}>
          <View style={styles.cardHeader}>
             <Ionicons name="home-outline" size={20} color="#00478F" />
             <Text style={styles.cardTitle}>Zonas Activas</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Mi Casa:</Text>
            <Text style={styles.value}>Santa Tecla</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Mi Trabajo:</Text>
            <Text style={styles.value}>San Salvador</Text>
          </View>
        </View>

        {/* Botón de Editar */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00478F' },
  header: { padding: 20, paddingTop: 60, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  body: { flex: 1, backgroundColor: '#F5F7FA', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, alignItems: 'center' },
  profileSection: { alignItems: 'center', marginTop: 20, marginBottom: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#00478F', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 14, color: '#666', marginTop: 5 },
  infoCard: { width: '100%', backgroundColor: '#fff', padding: 20, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2, marginBottom: 20 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginLeft: 10, color: '#00478F' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  label: { fontSize: 14, color: '#666' },
  value: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  divider: { height: 1, backgroundColor: '#E0E0E0', marginVertical: 10 },
  editButton: { width: '100%', padding: 15, backgroundColor: '#00478F', borderRadius: 15, alignItems: 'center' },
  editButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});