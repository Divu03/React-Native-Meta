import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [login, setLogin] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        {!login && (
          <>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
              value={email}
              onChangeText={onChangeEmail}
              placeholder=" Email "
              placeholderTextColor="#888888"
              style={styles.inputBox}
              keyboardType="email-address"
            />
            <TextInput
              value={password}
              onChangeText={onChangePassword}
              style={styles.inputBox}
              placeholder=" Password "
              placeholderTextColor="#888888"
              secureTextEntry={true}
            />
            <Pressable style={styles.loginButton} onPress={()=> {setLogin(true)}}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </>
        )}
        {login && (
          <>
            <Text style={styles.headerText}> You are logged in!  </Text>
          </>
        )}
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
    backgroundColor: '#EDEFEE',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  loginButton:{
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText:{
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
  },
});
