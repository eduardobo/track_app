// import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/base';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import baseStyle from '../styles/BaseStyle';

const TrackCreate = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if(!granted) {
        throw new Error('Location permission not granted');
      }

      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log(location);
      });
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
  <View style={ baseStyle.container}>
    <Text h2 /*style={ { fontSize: 48 }}*/>TrackCreate</Text>
    <Map/>

    {err ? <Text>Please enable location services</Text> : null}
  </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackCreate;