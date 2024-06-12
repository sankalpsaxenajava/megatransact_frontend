import {View} from 'react-native';
import BackNavigationHeader from '../components/BackNavigationHeader';
import CustomScrollView from '../components/CustomScrollView';

const SetupPinScreen = () => {
  function onBackHandler() {
    // todo: implement when nav is known
  }
  return (
    <CustomScrollView>
      <BackNavigationHeader onBackHandler={onBackHandler} />
    </CustomScrollView>
  );
};

export default SetupPinScreen;
