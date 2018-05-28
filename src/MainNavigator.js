import {createStackNavigator} from 'react-navigation';
import Main from './Main';
import Opacity from './Animations/Opacity';

const MainNavigator = createStackNavigator({
  Main: {
    screen: Main,
  },
  Opacity: {
    screen: Opacity,
  },
}, {
  initialRouteName: 'Main',
});

export default MainNavigator;