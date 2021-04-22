export const CHANGE_NAVIGATION_ACTION = 'CHANGE_NAVIGATION_ACTION';
export const CHANGE_NAVIGATION_ACTION_ROOT = 'CHANGE_NAVIGATION_ACTION_ROOT';
import * as NavigationService from '../../Navigation/navigationService';

export const changeNavigation = (from, to) => ({
  type: CHANGE_NAVIGATION_ACTION,
  data: {from, to},
  callback: NavigationService.navigateHome,
});

export const changeNavigationRoot = (from, to) => ({
  type: CHANGE_NAVIGATION_ACTION_ROOT,
  data: {from, to},
  callback: NavigationService.navigateRoot,
});
