// App.tsx
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import {RootStackParamList} from './types/navigationTypes';
import SplashScreen from './screens/SplashScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SetupPinScreen from './screens/SetupPinScreen';
import LoginScreen from './screens/LoginScreen';
import AccountTypeScreen from './screens/AccountTypeScreen';
import AppLoadScreen from './screens/AppLoadScreen';
import MobileDataScreen from './screens/Billpayment/MobileDataScreen';
import BillPaymentScreen from './screens/Billpayment/BillPaymentScreen';
import TransactionReviewScreen from './screens/Billpayment/TransactionReviewScreen';
import pinInput from './screens/Billpayment/PinInputScreen';
import PurchaseSuccessful from './screens/Billpayment/PurchaseSuccessfulScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import PayWithCardScreen from './screens/PayWithCard/PayWithCardScreen';
import ReviewPaymentScreen from './screens/PayWithCard/ReviewPaymentScreen';
import PaymentConfirmationScreen from './screens/PayWithCard/PaymentConfirmationScreen';
import PaymentReceiptScreen from './screens/PayWithCard/PaymentReceiptScreen';
import AirtimePurchaseScreen from './screens/Billpayment/AirtimePurchaseScreen';
import BillPaymentOptionScreen from './screens/Billpayment/BillPaymentOptionScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator();
const PaymentStack = createNativeStackNavigator();
const PayWithCardStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AppLoad"
            component={AppLoadScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AuthStack"
            component={AuthScreens}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentsStack"
            component={PaymentScreens}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PayWithCardStack"
            component={PayWithCardScreens}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function AuthScreens() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AccountType"
        component={AccountTypeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SetupPin"
        component={SetupPinScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="VerifyEmail"
        component={VerifyEmailScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

function PaymentScreens() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="PaymentOption"
        component={BillPaymentOptionScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="MobileData"
        component={MobileDataScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="AirtimePurchase"
        component={AirtimePurchaseScreen}
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

function PayWithCardScreens() {
  return (
    <PayWithCardStack.Navigator>
      <PayWithCardStack.Screen
        name="PayWithCard"
        component={PayWithCardScreen}
        options={{headerShown: false}}
      />
      <PayWithCardStack.Screen
        name="ReviewPayment"
        component={ReviewPaymentScreen}
        options={{headerShown: false}}
      />
      <PayWithCardStack.Screen
        name="PaymentConfirmation"
        component={PaymentConfirmationScreen}
        options={{headerShown: false}}
      />
      <PayWithCardStack.Screen
        name="PaymentReceipt"
        component={PaymentReceiptScreen}
        options={{headerShown: false}}
      />
    </PayWithCardStack.Navigator>
  );
}

export default App;
