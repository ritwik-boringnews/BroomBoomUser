import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Payments from '../Pages/Payments';
import RideHistory from '../Pages/RideHistory';
import ReferAndEarn from '../Pages/ReferAndEarn';
import Settings from '../Pages/Settings';
import HelpAndSupport from '../Pages/HelpAndSupport';
import Notifications from '../Pages/Notifications';
import CustomDrawer from '../Components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import History from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Setting from 'react-native-vector-icons/AntDesign';
import Support from 'react-native-vector-icons/FontAwesome';
import GMapHome from '../Pages/GMapHome/index.js';

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

const Drawer = createDrawerNavigator();
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="GMapHome"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#ADD8E6',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="SourceMap"
        component={GMapHome}
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
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Setting name="setting" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={HelpAndSupport}
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
