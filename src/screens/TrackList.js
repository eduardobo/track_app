import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackList = ({ navigation }) => {
  return (
  <View>
    <Text style={ { fontSize: 48 }}>TrackList</Text>
    <Button title="Go To track detail" onPress={() => navigation.navigate('TrackDetail')}/>
  </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackList;