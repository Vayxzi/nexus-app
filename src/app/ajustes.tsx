import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AjustesScreen() {
  const [isEnabledLuz, setIsEnabledLuz] = React.useState(true);
  const [isEnabledAgua, setIsEnabledAgua] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ajustes</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Preferencias de Alertas</Text>
        
        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
             <View style={styles.settingInfo}>
               <Ionicons name="flash" size={20} color="#F27D16" />
               <Text style={styles.settingText}>Alertas de Energía (CAESS)</Text>
             </View>
             <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledLuz ? "#00478F" : "#f4f3f4"}
                onValueChange={() => setIsEnabledLuz(!isEnabledLuz)}
                value={isEnabledLuz}
             />
          </View>
          <View style={styles.divider} />
          <View style={styles.settingRow}>
             <View style={styles.settingInfo}>
               <Ionicons name="water" size={20} color="#00478F" />
               <Text style={styles.settingText}>Alertas de Agua (ANDA)</Text>
             </View>
             <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledAgua ? "#00478F" : "#f4f3f4"}
                onValueChange={() => setIsEnabledAgua(!isEnabledAgua)}
                value={isEnabledAgua}
             />
          </View>
        </View>

        <View style={[styles.settingCard, {marginTop: 20}]}>
            <View style={styles.settingRow}>
                <Text style={[styles.settingText, {color: '#d9534f'}]}>Cerrar Sesión</Text>
                <Ionicons name="log-out-outline" size={20} color="#d9534f" />
            </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00478F' },
  header: { padding: 20, paddingTop: 60, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  body: { flex: 1, backgroundColor: '#F5F7FA', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#666', marginBottom: 15, marginTop: 10 },
  settingCard: { backgroundColor: '#fff', borderRadius: 15, padding: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  settingInfo: { flexDirection: 'row', alignItems: 'center' },
  settingText: { fontSize: 16, marginLeft: 10, color: '#333' },
  divider: { height: 1, backgroundColor: '#f0f0f0' }
});