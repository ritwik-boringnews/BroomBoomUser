import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payments from '../Pages/Payments';
import RideHistory from '../Pages/RideHistory';
import ReferAndEarn from '../Pages/ReferAndEarn';

import HelpAndSupport from '../Pages/HelpAndSupport';
import Notifications from '../Pages/Notifications';
import CustomDrawer from '../Components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import History from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Support from 'react-native-vector-icons/FontAwesome';
import GMapHome from '../Pages/GMapHome/index.js';
import SearchPickup from '../Pages/SearchPickup';
import DestinationLocation from '../Pages/DestinationLocation';
import Profile from '../Pages/Profile';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import Faq from '../Pages/Faq';
function HomeDrawerScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const HomePageMain = () => {
  return (
    <Stack.Navigator
      initialRouteName="SourceMap"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SourceMap" component={GMapHome} />
      <Stack.Screen name="SearchPickup" component={SearchPickup} />
      <Stack.Screen
        name="DestinationLocation"
        component={DestinationLocation}
      />
    </Stack.Navigator>
  );
};

const SupportStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HelpAndSupport"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="Faq" component={Faq} />
      {/* <Stack.Screen name="Payments" component={Payments} /> */}
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="SourceMap"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#F5C001',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      {/* <Drawer.Screen
        name="EnterDestination"
        component={EnterDestination}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Map"
        component={HomePageMain}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <ProfileIcon name="user" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SearchPickup"
        component={SearchPickup}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DestinationLocation"
        component={DestinationLocation}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Notificaton"
        component={Notifications}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="notifications" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payments}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Ride History"
        component={RideHistory}
        options={{
          drawerIcon: ({color}) => (
            <History name="history" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Refer and Earn"
        component={ReferAndEarn}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="gift" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Support"
        component={SupportStack}
        options={{
          drawerIcon: ({color}) => (
            <Support name="support" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
