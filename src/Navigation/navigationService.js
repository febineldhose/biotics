import {NavigationActions} from 'react-navigation';

let _navigator;

export function setNavigRef(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator?.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

// add other navigation functions that you need and export them
export function navigateRoot(state, data, params) {
  navigate(data?.to, params);
}

export function navigateHome(state, data, params) {
  navigate(data?.to, params);
}

// export function resetActor(params) {
//   navigator?.dispatch();
// }
