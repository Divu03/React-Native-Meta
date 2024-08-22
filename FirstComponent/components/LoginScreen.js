import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable, Platform} from 'react-native';
import {useState} from 'react';

export default function LoginScreen() {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.container}
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder= "email"
          style = {styles.inputBox}
        />
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          placeholder= "password"
          style = {styles.inputBox}
          secureTextEntry={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE'
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});