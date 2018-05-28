import { createStackNavigator } from 'react-navigation';
import Main from './Main';
import { Opacity, Translate, Scale } from './Animations';

const MainNavigator = createStackNavigator({
  Main: {
    screen: Main,
  },
  Opacity: {
    screen: Opacity,
  },
  Translate: {
    screen: Translate,
  },
  Scale: {
    screen: Scale,
  },
}, {
  initialRouteName: 'Main',
});

export default MainNavigator;