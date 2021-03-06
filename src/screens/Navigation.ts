import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HOME_PAGE, DETAILS_PAGE } from '../routes';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const AppNavigator = createStackNavigator(
    {
        [HOME_PAGE]: { screen: HomeScreen },
        [DETAILS_PAGE]: { screen: DetailsScreen },
    },
    {
        initialRouteName: HOME_PAGE,
        defaultNavigationOptions: {
            title: 'List Episods',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

export default createAppContainer(AppNavigator);
