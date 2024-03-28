import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View>
      <Image
        source={require('../assets/banner.webp')}
        style={s.img}
        resizeMode='cover'
      />
      <Text style={s.title}>
        EthLove
      </Text>
      <Text style={s.title}>
        Donate Ξ from EthOS
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  img: {
    borderColor: 'red',
    borderBottomWidth: 5,
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  }
});

export default Header;