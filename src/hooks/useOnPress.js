import {useDispatch} from 'react-redux';
import {setModalSearchVisible} from '../store/actions';

const useOnPress = () => {
  const dispatchRedux = useDispatch();
  const dispatchModalSearchVisible = data => {
    dispatchRedux(setModalSearchVisible(data));
  };

  const onPress = value => {
    console.log(value);

    switch (value) {
      case 'magnifying-glass':
        return dispatchModalSearchVisible(true);
      default:
        break;
    }
  };

  return onPress;
};

export default useOnPress;
