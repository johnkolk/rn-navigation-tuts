import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Navigation from './screens/Navigation';

const TabNavigator = createBottomTabNavigator({
    Films: Navigation,
    Serials: Navigation,
});

export default createAppContainer(TabNavigator);
