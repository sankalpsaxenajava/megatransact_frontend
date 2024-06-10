// App.tsx
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import {RootStackParamList} from './types/navigationTypes';
import BillPaymentScreen from './screens/BillPaymentScreen';
import MobileDataScreen from './screens/DataPurchaseScreens/MobileDataScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BillPayment"
          component={BillPaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DataPurchaseStack"
          component={DataPurchaseScreens}
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

export default App;
