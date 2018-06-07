import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import App from '../App';
import NotificationScreen from '../notifications';
import Profile from '../mainProfile';
import Cart from '../carts';
import MoreOption from '../moreOptions';
import ChickenPalace from '../chikenPalace';
import MainProfile from '../mainProfile';

const TabNavigator = createBottomTabNavigator({
    Restautrants: App,
    Carts: Cart,
    Notifications: NotificationScreen,
    Profile: MainProfile

},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Restautrants') {
                    iconName = `ios-restaurant${focused ? '' : '-outline'}`;
                } else if (routeName === 'Carts') {
                    iconName = `ios-cart${focused ? '' : '-outline'}`;
                } else if (routeName === 'Notifications') {
                    iconName = `ios-notifications${focused ? '' : '-outline'}`;
                } else if (routeName === 'Profile') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#f5a623',
            inactiveTintColor: 'gray',
        },
    }
);
export default class Home extends React.Component {
    render() {
        return (
            <View style={{marginTop: 24, flex: 1}}>
                <TabNavigator screenProps={this.props.navigation} />
            </View>
        )
    }
}