import { NavigationActions } from 'react-navigation';

let navigator;
const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};
const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

// add other navigation functions that you need and export them
export {
  navigate,
  navigator,
  setTopLevelNavigator,
};
