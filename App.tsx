// App.tsx
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import MobileDataScreen from './screens/DataPurchaseScreens/MobileDataScreen';
import {RootStackParamList} from './types/navigationTypes';
import BillPaymentScreen from './screens/Billpayment/BillPaymentScreen';
import TransactionReview from './screens/Components/TransactionReview';
import pinInput from './screens/Billpayment/pinInput';
import PurchaseSuccessful from './screens/Billpayment/PurchaseSuccessful';
import PaymentsScreen from './screens/PaymentsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Payments"
          component={PaymentsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DataPurchaseStack"
          component={DataPurchaseScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BillPaymentStack"
          component={BillPaymentScreens}
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

const DataPurchaseStack = createNativeStackNavigator();

function DataPurchaseScreens() {
  return (
    <DataPurchaseStack.Navigator>
      <Stack.Screen
        name="MobileData"
        component={MobileDataScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false,
        }}
      />
    </DataPurchaseStack.Navigator>
  );
}

const BillPaymentStack = createNativeStackNavigator();

function BillPaymentScreens() {
  return (
    <BillPaymentStack.Navigator>
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
    </BillPaymentStack.Navigator>
  );
}

export default App;
