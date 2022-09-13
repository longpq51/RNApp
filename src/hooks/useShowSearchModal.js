import {useDispatch, useSelector} from 'react-redux';
import {setModalSearchVisible} from '../store/actions';
import {modalSearchVisibleSelector} from '../store/selectors';

const useShowSearchModal = () => {
  const isShowSearchModal = useSelector(modalSearchVisibleSelector);

  const dispatchRedux = useDispatch();
  const dispatchShowSearchModal = data => {
    dispatchRedux(setModalSearchVisible(data));
  };

  return {
    isShowSearchModal,
    dispatchShowSearchModal,
  };
};

export default useShowSearchModal;
