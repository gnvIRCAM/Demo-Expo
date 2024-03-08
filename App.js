import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';  
import { useEffect, useState } from 'react';

export default function App() {
  const [location, setLocation] = useState(); 

  useEffect(() => {
    const getLocationAsync =  async () => {
      let {status} = await Location.requestForegroundPermissionsAsync(); 
      if (status==='granted') {
        let position = await Location.getCurrentPositionAsync()
        setLocation(position);  
      }
      else {
        console.log('Permission not granted'); 
      }
    }
    getLocationAsync(); 
  }, [])
  return (
    <MapView 
      style={styles.container}
      provider={MapView.PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 48,
        longitude: 2,
        latitudeDelta: 0.0922*1.2,
        longitudeDelta: 0.0421*1.2
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
