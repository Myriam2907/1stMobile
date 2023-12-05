import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleLogin = () => {
    console.log('Login pressed');
    navigation.navigate('Appointment');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
          width: 200,
        }}
        placeholder="Email"
      />

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
          width: 200,
        }}
        placeholder="Password"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <Text style={{ marginTop: 10, color: 'blue' }}>Forgot Password?</Text>
    </View>
  );
};

export default Login;
