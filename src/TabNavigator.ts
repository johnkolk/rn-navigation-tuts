import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Navigation from './screens/Navigation';

const TabNavigator = createBottomTabNavigator(
    {
        Tab1: Navigation,
        Tab2: Navigation
    }
)

export default createAppContainer(TabNavigator);