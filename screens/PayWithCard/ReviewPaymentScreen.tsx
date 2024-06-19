import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigationTypes';

type ReviewPaymentRouteProps = RouteProp<RootStackParamList, 'ReviewPayment'>;
type ReviewPaymentProps = {
  route: ReviewPaymentRouteProps;
};

const ReviewPaymentScreen: React.FC<ReviewPaymentProps> = ({route}) => {
  const {data} = route.params;
  console.log(data);
  return <></>;
};

export default ReviewPaymentScreen;
