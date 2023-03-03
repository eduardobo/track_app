import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Signup = ({ navigation })  => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
  <View style={styles.container}>
    <NavigationEvents 
      onWillFocus={clearErrorMessage}
      />

    <AuthForm 
      headerText="Sign Up For Tracker" 
      errorMessage={ state.errorMessage } 
      buttonText="Sign up"
      // onSubmit={({ email, password }) => signup({ email, password })} 
      onSubmit={ signup } />

    {/* <View style={ styles.rowHorizontal }>
      <Text>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={ styles.link }>Sign in instead</Text>
      </TouchableOpacity>
    </View> */}


    {/* <Button title="Go to Sign In"
      onPress={() => navigation.navigate('Signin')}/> */}

    <NavLink 
      routeName="Signin"
      navigationText="Already have an account? Sign in instead"
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  rowHorizontal: {
    flexDirection: 'row',
    margin: 15
  },
  link: {
    color: 'blue'
  }
});

Signup.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default Signup;