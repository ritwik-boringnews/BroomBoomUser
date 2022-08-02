import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
    <Drawer.Navigator initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={HomeDrawerScreen} />
        <Drawer.Screen name="NotificationsDrwaer" component={NotificationsDrwaerScreen} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigator