import React, {createRef, RefObject, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

type PinInputProps = {};

const PinInput: React.FC<PinInputProps> = () => {
  const navigation = useNavigation(); // Hook for navigation

  const inputRefs: RefObject<TextInput>[] = Array.from({length: 5}, () =>
    createRef<TextInput>(),
  );
  const [pin, setPin] = useState(Array(5).fill(''));

  const handleTextChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text.length === 1) {
      focusNextField(index);
    }
  };

  const focusNextField = (index: number) => {
    if (index < inputRefs.length - 1 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current.focus();
    }
  };

  const focusPreviousField = (index: number) => {
    if (index > 0 && inputRefs[index - 1].current) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (event.nativeEvent.key === 'Backspace' && !pin[index]) {
      focusPreviousField(index);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <Header title=" " haveBorder={false} />
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={{flex: 1}}
          activeOpacity={1}
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={{flex: 1}}>
            <View style={styles.transactionMain}>
              <Text style={styles.pinText}>
                Enter your PIN to confirm the transaction
              </Text>
              <Text style={styles.accountText}>
                Enter the transaction PIN you created with your account.
              </Text>
            </View>
            <View style={styles.container}>
              {inputRefs.map((ref, index) => (
                <TextInput
                  key={index}
                  ref={ref}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType={index === 4 ? 'done' : 'next'}
                  onChangeText={text => handleTextChange(text, index)}
                  onKeyPress={event => handleKeyPress(event, index)}
                  value={pin[index]} // Ensure value is set
                  blurOnSubmit={false}
                />
              ))}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('PurchaseSuccessful');
          }}>
          <Text style={styles.buttonText}>Authorize Payment</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    width: 55,
    height: 63,
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    marginLeft: 2,
  },
  button: {
    backgroundColor: '#6200EA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //  width: '90%',
    height: 60,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  transactionMain: {
    marginHorizontal: 17,
    marginVertical: 20,
  },
  pinText: {
    color: '#121212',
    fontSize: 24,
    fontWeight: 'bold',
  },
  accountText: {
    color: '#6A6A6A',
    fontSize: 16,
    marginTop: 10,
  },
});

export default PinInput;
