// App.tsx
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import MobileDataScreen from './screens/Billpayment/MobileDataScreen';
import {RootStackParamList} from './types/navigationTypes';
import BillPaymentScreen from './screens/Billpayment/BillPaymentScreen';
import TransactionReviewScreen from './screens/Billpayment/TransactionReviewScreen';
import pinInput from './screens/Billpayment/PinInputScreen';
import PurchaseSuccessful from './screens/Billpayment/PurchaseSuccessfulScreen';
import PaymentsScreen from './screens/PaymentsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PaymentsStack"
          component={PaymentScreens}
          options={{headerShown: false}}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const PaymentStack = createNativeStackNavigator();

function PaymentScreens() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="MobileData"
        component={MobileDataScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="BillPayment"
        component={BillPaymentScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="TransactionReview"
        component={TransactionReviewScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="PinInput"
        component={pinInput}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="PurchaseSuccessful"
        component={PurchaseSuccessful}
        options={{headerShown: false}}
      />
    </PaymentStack.Navigator>
  );
}

export default App;
