import {useDispatch, useSelector} from 'react-redux';
import {setSkipType} from '../../store/actions';
import {skipTypeSelector} from '../../store/selectors';

const useSkipType = () => {
  const skipType = useSelector(skipTypeSelector);

  const dispatchRedux = useDispatch();
  const dispatchSkipType = data => {
    dispatchRedux(setSkipType(data));
  };

  return {
    skipType,
    dispatchSkipType,
  };
};

export default useSkipType;
