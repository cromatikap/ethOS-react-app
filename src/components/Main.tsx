import React from 'react';
import { Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import donorRecipients from '../constants/donorRecipients';
import * as ExpoWalletsdk from 'expo-walletsdk';
import Header from './Header';
import { Address, TxResult } from '../constants/types';

function Main(): React.JSX.Element {
  const makeDonation = (recipient: Address) => () => {
    console.log(`Donating to ${recipient}`);

    const transaction = {
      to: recipient,
      value: '500000000000000', // 0.0005 ETH
      chainId: 8453, 
      chainRPCUrl: 'https://mainnet.base.org'
    };
    var txHash: TxResult = ExpoWalletsdk.sendTransaction(transaction);
    if (txHash === "decline")
      ToastAndroid.show('Donnation canceled', ToastAndroid.CENTER);
    else
      ToastAndroid.show(`Success: ${txHash}`, ToastAndroid.CENTER);
  };

  return (
    <View>
      <Header />
      {donorRecipients.map((recipient, i) => (
        <Pressable
        key={i}
        style={({pressed}) => pressed ? [s.button, s.pressed] : s.button}
        onPress={makeDonation(recipient.address)}
        >
          <Text style={s.name}>{recipient.name}</Text>
          <Text style={s.description}>{recipient.description}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  pressed: {
    backgroundColor: 'rgb(210, 230, 255)'
  },
  button: {
    padding: 5,
    margin: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10
  }
});

export default Main;