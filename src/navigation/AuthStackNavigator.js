import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Dashboard from '../screens/dashboard/Dashboard';
import ViewPage from '../screens/dashboard/ViewPage';
import Notification from '../screens/notification/Notification';
import CompletedJob from '../screens/completedjob/CompletedJob';
import GstReturnStatus from '../screens/GST/GstReturnStatus';
import Payment from '../screens/paymentHistory/Payment';
import RecentJobView from '../screens/dashboard/RecentJobView';
import SplashScreen from './SplashScreen';

const AuthStackNavigator = () => {
    const Stack = createNativeStackNavigator();

 
    
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ViewPage" component={ViewPage} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="CompletedJob" component={CompletedJob} />
        <Stack.Screen name="GstReturnStatus" component={GstReturnStatus} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="RecentJobView" component={RecentJobView} />
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})