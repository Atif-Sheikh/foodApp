import React, { Component } from 'react';
// import { Nav } from './nav';
// import { Router, Scene } from 'react-native-router-flux';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';
import MoreOptions from './components/moreOptions';
import ChikenPalace from './components/chikenPalace';
import Cart from './components/carts';
// import Posts from './Components/posts';
// import NGOHome from './Components/ngoHome';
// import CustomHeader from './Components/header';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
    Login,
    Signup,
    Home,
    MoreOptions,
    ChikenPalace,
    Cart
});