import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import { createLogger } from 'redux-logger';
import createLoadingPlugin from '@rematch/loading';
import * as models from '../models';
const loggerMiddleware = createLogger();
const immer = immerPlugin()
const options = {
  whitelist: []
};
const loading = createLoadingPlugin({options});

const store = init({
  redux: {
    middlewares: [loggerMiddleware]
  },
  plugins: [immer,loading],
  models,
})

export const getState = () => {
  return store.getState()
}


export default store;
