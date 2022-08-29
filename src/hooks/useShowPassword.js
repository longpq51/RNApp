import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setShowPassword} from '../store/actions';
import {showPasswordSelector} from '../store/selectors';

const useShowPassword = () => {
  const dispatchRedux = useDispatch();
  const dispatchShowPassword = data => {
    dispatchRedux(setShowPassword(data));
  };

  let showPassword = useSelector(showPasswordSelector);

  const isShowPassword = () => {
    dispatchShowPassword(!showPassword);
  };

  return isShowPassword;
};

export default useShowPassword;
