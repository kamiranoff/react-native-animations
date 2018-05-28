import { createStackNavigator } from 'react-navigation';
import Main from './Main';
import { Opacity, Translate, Scale, WidthAndHeight } from './Animations';

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
  WidthAndHeight: {
    screen: WidthAndHeight,
  }
}, {
  initialRouteName: 'Main',
});

export default MainNavigator;