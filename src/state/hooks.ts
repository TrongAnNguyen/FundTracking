import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useShallowEqualSelector: TypedUseSelectorHook<RootState> = (
  selector,
) => useAppSelector(selector, shallowEqual)
