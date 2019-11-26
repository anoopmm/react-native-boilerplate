import { retrieveData } from '../../../utils/storage'
;
const initialState = {
  data: {

  },
  isAuthorised: false,
};
export const user = {
  state: {
    ...initialState,
  },
  reducers: {
    updateAuthorisationStatus(state, payload) {
      state.isAuthorised = payload;
      return state;
    },
    updateUserData(state, payload) {
      state.data = payload;
      return state;
    },
    clearUserData() {
      state = initialState;
      return state;
    },
  },
  effects: (dispatch) => {
    const { user: { updateUserData, updateAuthorisationStatus } } = dispatch;
    return {
      async checkAuthorisation(payload, rootState) {
        const userData = await retrieveData('userData');
        if (userData.success && userData.data && userData.data.token) {
          updateUserData(userData.data);
          updateAuthorisationStatus(true);
        }
      },
    };
  },
}
;