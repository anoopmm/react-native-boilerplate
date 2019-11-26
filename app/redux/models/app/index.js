import { navigate } from '../../../router/navigationService';
import { getState } from '../../store';

const initialState = {
  ready: false,
};

const app = {
  state: {
    ...initialState,
  },
  reducers: {
    initiateAppReady(state, payload) {
      state.ready = true;
      return state;
    },
  },
  effects: (dispatch) => {
    const { app: { initiateAppReady }, user: { checkAuthorisation } } = dispatch;
    return {
      async onAppStart(payload, rootState) {
        await checkAuthorisation();
        const { user: { isAuthorised } } = getState();
        initiateAppReady();
        if (isAuthorised) {
          navigate('MainAppStackScreen');
        } else {
          navigate('AuthStackScreen');
        }
      },
    };
  },
};
export { app as default };
