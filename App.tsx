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

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PayWithCard"
            component={PayWithCardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ReviewPayment"
            component={ReviewPaymentScreen}
            options={{headerShown: false}}
          />
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
            name="AccountType"
            component={AccountTypeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SetupPin"
            component={SetupPinScreen}
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
          <Stack.Screen
            name="PaymentsStack"
            component={PaymentScreens}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
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
