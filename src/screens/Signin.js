import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Input, Button } from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const Signin = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  return (
  <View style={styles.container}>
    <NavigationEvents
      onWillFocus={clearErrorMessage} // Called any time we are about to naigate to this screen
      // onDidFocus={() => {}} // Called any time we have successfuly navigated to this screen
      // onWillBlur={clearErrorMessage} // Navigate away from the screen
      // onDidBlur={() => {}} // When the navigation away from the screen is complete
      />

    <Text style={ styles } h3>Sign In</Text>

    <Input label="Email"
      value={ email }
      onChangeText={ setEmail }
      autoCapitalize="none"
      autoCorrect={ false }/>

    <Input label="Password"
      secureTextEntry
      value={ password }
      onChangeText={ setPassword }
      autoCapitalize="none"
      autoCorrect={ false }/>

    { state.errorMessage ? <Text style={styles.error}>{ state.errorMessage }</Text> : null }
    { state.message ? <Text style={styles.success}>{ state.message }</Text> : null }

    <View style={styles.wrapper}>
      <Button 
        title="Sign in"
        onPress={() => signin({email, password})} />
    </View>

    <NavLink
       routeName="Signup"
       navigationText="Not have an account yet? Sign up"
    />

    <Button title="Go to Sign Up"
      onPress={() => navigation.navigate('Signup')} />

    <Button title="Go to main flow"
      onPress={() => navigation.navigate('mainFlow')} />
  </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16
  },
  success: {
    color: 'blue',
    fontSize: 16
  },
  wrapper: {
    margin: 15,
    borderWidth: 1,
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

Signin.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

// Signin.navigationOptions = () => {
//   return {
//     header: () => false,
//   }
// };

export default Signin;