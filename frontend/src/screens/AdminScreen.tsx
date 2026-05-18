import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AdminScreen() {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>Tela do Administrador</Text>
      <Text style={styles.subtitle}>Gerencie produtos, lojas e preços do app.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Painel de controle</Text>
        <Text style={styles.cardText}>Acesse relatórios, cadastre novos produtos e controle ofertas.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar novo produto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonOutlineText}>Ver lista de lojas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonOutlineText}>Configurações do app</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#EEF2FF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#4338CA',
  },
  cardText: {
    fontSize: 14,
    color: '#4B5563',
  },
  button: {
    backgroundColor: '#4338CA',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#4338CA',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonOutlineText: {
    color: '#4338CA',
    fontSize: 16,
    fontWeight: '600',
  },
});
