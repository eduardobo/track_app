import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from '@rneui/themed'
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
  <>
    <Spacer>
      <Text h3>{headerText}</Text>
    </Spacer>
    
    <Input label="Email" 
      value={email}
      onChangeText={setEmail}
      autoCapitalize="none"
      autoCorrect={false}
    />
    <Spacer/>

    <Input 
      secureTextEntry
      label="Password" 
      value={password} 
      onChangeText={(newPassword) => setPassword(newPassword)}
      autoCapitalize="none"
      autoCorrect={false}
      
    />

    { errorMessage ? <Text style={styles.error}>{ errorMessage }</Text> : null }

    <Spacer>
      <Button title={ buttonText } onPress={() => onSubmit({ email, password })}/>
    </Spacer>
  </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
});

export default AuthForm;