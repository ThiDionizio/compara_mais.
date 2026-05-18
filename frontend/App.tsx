import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AdminScreen from './src/screens/AdminScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AdminScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});
