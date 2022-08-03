import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GMapHome from '../Pages/GMapHome/inde';

function HomeDrawerScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsDrwaerScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  const Drawer = createDrawerNavigator();
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="GMapHome">
        <Drawer.Screen name="HomeDrawer" component={HomeDrawerScreen} />
        <Drawer.Screen name="NotificationsDrwaer" component={NotificationsDrwaerScreen} />
        <Drawer.Screen name="GMapHome" component={GMapHome} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigator