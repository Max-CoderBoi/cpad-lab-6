import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // State: values that change while the app runs
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? styles.dark : styles.light;
  const textColor = darkMode ? '#ffffff' : '#222222';

  return (
    <View style={[styles.container, theme]}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />

      {/* Image (network URL) */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      <Text style={[styles.title, { color: textColor }]}>
        Cross-Platform App with React Native
      </Text>

      {/* Shows which platform the same code is running on */}
      <Text style={[styles.subtitle, { color: textColor }]}>
        Running on: {Platform.OS === 'ios' ? 'iOS' : Platform.OS === 'android' ? 'Android' : Platform.OS}
      </Text>

      {/* Text input + state */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <Text style={[styles.greeting, { color: textColor }]}>
        {name ? `Hello, ${name}!` : 'Hello, stranger!'}
      </Text>

      {/* Counter: state + event handling */}
      <Text style={[styles.counter, { color: textColor }]}>Count: {count}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#2e7d32' }]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>+ Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#c62828' }]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.btnText}>- Decrease</Text>
        </TouchableOpacity>
      </View>

      <Button title="Reset" onPress={() => setCount(0)} />

      {/* Toggle: boolean state */}
      <View style={styles.row}>
        <Text style={{ color: textColor, marginRight: 10 }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

// StyleSheet + Flexbox layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',       // horizontal centering
    justifyContent: 'center',   // vertical centering
    padding: 20,
  },
  light: { backgroundColor: '#f2f2f2' },
  dark: { backgroundColor: '#121212' },
  logo: { width: 60, height: 60, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 6 },
  subtitle: { fontSize: 14, marginBottom: 20 },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  greeting: { fontSize: 18, marginVertical: 12 },
  counter: { fontSize: 32, fontWeight: 'bold', marginVertical: 10 },
  row: {
    flexDirection: 'row',       // Flexbox: horizontal row
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
