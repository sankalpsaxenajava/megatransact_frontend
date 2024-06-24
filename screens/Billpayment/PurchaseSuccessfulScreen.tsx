import React, {createRef, RefObject, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type PurchaseSuccessfulProps = {};

const PurchaseSuccessful: React.FC<PurchaseSuccessfulProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <Image
          source={require('../../assets/icons/purchase-success.png')}
          style={styles.image}
        />
        <Text style={styles.pruchaseText}>Data purchase successful</Text>
        <Text style={styles.mobileDataText}>
          Your mobile data has been purchased successfully
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Payments');
        }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    //  width: '90%',
    marginBottom: 40,
    height: 60,
    marginHorizontal: 20,
    borderColor: '#CEB0F8',
    borderWidth: 1,
  },
  buttonText: {
    color: '#212121',
    fontSize: 16,
  },
  pruchaseText: {
    color: '#000000',
    fontSize: 24,
  },
  mobileDataText: {
    fontSize: 14,
    color: '#717171',
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});

export default PurchaseSuccessful;
