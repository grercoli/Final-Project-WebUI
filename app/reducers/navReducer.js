import { NavigationActions } from 'react-navigation';
import { TweetStack } from '../components/AppNavigator';

const firstAction = TweetStack.router.getActionForPathAndParams('Home');
const tempNavState = TweetStack.router.getStateForAction(firstAction);
const initialNavState = TweetStack.router.getStateForAction(
  tempNavState
);

//function NavReducer(state = initialNavState, action) {
const NavReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = TweetStack.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Tweet':
      nextState = TweetStack.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Tweet', params: action.payload}),
        state
      );
      break;
    default:
      nextState = TweetStack.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default NavReducer