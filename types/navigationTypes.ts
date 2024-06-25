import {PayWithCardForm} from '../screens/payWithCardScreens/PayWithCardScreen';

export type RootStackParamList = {
  AppLoad: undefined;
  Splash: undefined;
  AccountType: undefined;
  Login: undefined;
  SetupPin: undefined;
  SignUp: undefined;
  VerifyEmail: undefined;
  PaymentsStack: undefined;
  PayWithCardStack: undefined;
  PayWithCard: undefined;
  ReviewPayment: {
    data: PayWithCardForm;
  };
  PaymentConfirmation: {
    data: PayWithCardForm;
  };
  PaymentReceipt: {
    data: PayWithCardForm;
  };
};
