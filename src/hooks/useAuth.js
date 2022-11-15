import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    user: useSelector(selectUser),
  };
};
