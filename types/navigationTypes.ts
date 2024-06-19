import {PayWithCardForm} from '../screens/PayWithCard/PayWithCardScreen';

export type RootStackParamList = {
  AppLoad: undefined;
  Splash: undefined;
  AccountType: undefined;
  Login: undefined;
  SetupPin: undefined;
  SignUp: undefined;
  VerifyEmail: undefined;
  PaymentsStack: undefined;
  PayWithCard: undefined;
  ReviewPayment: {
    data: PayWithCardForm;
  };
};
