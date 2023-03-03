import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@rneui/base';
import { SafeAreaView} from 'react-navigation';
import baseStyle  from '../styles/BaseStyle';
import { Context as AuthContext } from '../context/AuthContext';

const Account = () => {
  const { signout } = useContext(AuthContext);

  return (
  <SafeAreaView forceInset={{ top: 'always' }}>
  {/* <View style={baseStyle.container}> */}
    <Text style={ { fontSize: 48 }}>Account</Text>

    <Button 
      title="Sign Out"
      onPress={signout}
    />
  {/* </View> */}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Account;