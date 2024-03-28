import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Header from './Header';

function Incompatible(): React.JSX.Element {
  const handlePress = () => {
    Linking.openURL('https://www.ethosmobile.org/');
  };

  return (
    <View>
      <Header />
      <Text style={styles.text}>
        This application is not compatible with your device.
      </Text>
      <Text style={styles.text}>
        You need an{' '}
        <Text style={styles.link} onPress={handlePress}>
          ethOS mobile
        </Text>
        {' '}to use this app.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
  },
  link: {
    color: 'blue',
  },
});

export default Incompatible;
