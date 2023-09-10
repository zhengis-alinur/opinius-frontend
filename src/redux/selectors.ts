import { RootState } from './store';

export const selectIsLogined = (state: RootState) => state.auth.isLogined;
export const selectUser = (state: RootState) => state.auth.user;
