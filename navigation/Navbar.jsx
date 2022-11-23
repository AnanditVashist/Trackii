import { TabActions } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from '../screens/Profile'
import Plan from '../screens/Plan'
import Home from '../screens/Home'
import Progress from '../screens/Progress'
import Upgrade from '../screens/Upgrade'


const Tab= createBottomTabNavigator();
export default function Navbar(){
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Profile' component={Profile}></Tab.Screen>
            <Tab.Screen name='Plan' component={Plan}></Tab.Screen>
            <Tab.Screen name='Home' component={Home}></Tab.Screen>
            <Tab.Screen name='Progress' component={Progress}></Tab.Screen>
            <Tab.Screen name='Upgrade' component={Upgrade}></Tab.Screen>
        </Tab.Navigator>
    )
}