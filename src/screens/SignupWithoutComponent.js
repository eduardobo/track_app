import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from '@rneui/base';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const Signup = ({ navigation })  => {
  const { state, signup } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
  <View style={styles.container} options = {{ title: 'help' }}>
    <Spacer>
      <Text h3>Sign Up for Tracker</Text>
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

    { state.errorMessage ? <Text style={styles.error}>{ state.errorMessage }</Text> : null }

    <Spacer>
      <Button title="Sign Up" onPress={() => signup({ email, password })}/>
    </Spacer>

    <View style={ styles.rowHorizontal }>
      <Text>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={ styles.link }>Sign in instead</Text>
      </TouchableOpacity>
    </View>


    {/* <Button title="Go to Sign In"
      onPress={() => navigation.navigate('Signin')}/> */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
  rowHorizontal: {
    flexDirection: 'row',
    margin: 15
  },
  link: {
    color: 'blue'
  }
});


export default Signup;