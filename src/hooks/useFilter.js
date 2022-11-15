import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  return filter;
};
