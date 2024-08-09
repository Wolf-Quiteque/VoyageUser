import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import colors from '../utils/colors';

const SignUpScreen = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSignUp = () => {
    // Here you would typically send the userInfo to your backend
    console.log(userInfo);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Join Our Community</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={colors.textColor}
          onChangeText={(text) => setUserInfo({...userInfo, fullName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.textColor}
          keyboardType="email-address"
          onChangeText={(text) => setUserInfo({...userInfo, email: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={colors.textColor}
          keyboardType="phone-pad"
          onChangeText={(text) => setUserInfo({...userInfo, phone: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.textColor}
          secureTextEntry
          onChangeText={(text) => setUserInfo({...userInfo, password: text})}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.termsText}>
        By signing up, you agree to our Terms of Service and Privacy Policy
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textColor,
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: colors.textColor,
    shadowColor: colors.textColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    marginTop: 20,
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default SignUpScreen;