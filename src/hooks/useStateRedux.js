import {useDispatch, useSelector} from 'react-redux';

const useStateRedux = (selector, set) => {
  const select = useSelector(selector);

  const dispatchRedux = useDispatch();
  const dispatch = data => {
    dispatchRedux(set(data));
  };

  return {
    select,
    dispatch,
  };
};

export default useStateRedux;
