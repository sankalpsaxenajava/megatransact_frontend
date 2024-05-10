// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import {RootStackParamList} from './types/navigationTypes';
import BillPaymentScreen from './screens/Billpayment/BillPaymentScreen';
import TransactionReview from './screens/Components/TransactionReview';
import pinInput from './screens/Billpayment/pinInput';
import PurchaseSuccessful from './screens/Billpayment/PurchaseSuccessful';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BillPayment"
          component={BillPaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionReview"
          component={TransactionReview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="pinInput"
          component={pinInput}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PurchaseSuccessful"
          component={PurchaseSuccessful}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
