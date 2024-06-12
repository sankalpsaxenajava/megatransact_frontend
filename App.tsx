// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
