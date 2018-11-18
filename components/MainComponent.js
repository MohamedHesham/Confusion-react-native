import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';


const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail}
}, {
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
});

const HomeNavigator = createStackNavigator({
  Home: { screen: Home}
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff'
  })
});

const ContactUsNavigator = createStackNavigator({
  ContactUs: { screen: ContactUs}
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff'
  })
});

const AboutUsNavigator = createStackNavigator({
  ContactUs: { screen: AboutUs}
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff'
  })
});

const MainNavigator = createDrawerNavigator({
  Home:
  {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home'
    }
  },
  Menu:
  {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu'
    },
  },
  ContactUs: {
    screen: ContactUsNavigator,
    navigationOptions: {
      title: 'ContactUs',
      drawerLabel: 'ContactUs'
    }
  },
  AboutUs: {
    screen: AboutUsNavigator,
    navigationOptions: {
      title: 'AboutUs',
      drawerLabel: 'AboutUs'
    }
  }
}, {
    drawerBackgroundColor: '#D1C4E9'
  });

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishId) {
    this.setState({selectedDish: dishId});
  }

  render() {

    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator /> 
      </View>
    );
  }
}

export default Main;