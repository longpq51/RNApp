import {useDispatch, useSelector} from 'react-redux';
import {setUserInfo} from '../store/actions';
import {userInfoSelector} from '../store/selectors';

const useUserInfo = () => {
  const userInfo = useSelector(userInfoSelector);
  const dispatchRedux = useDispatch();
  const dispatchSetUserInfo = data => {
    dispatchRedux(setUserInfo(data));
  };

  return {
    userInfo,
    dispatchSetUserInfo,
  };
};

export default useUserInfo;
