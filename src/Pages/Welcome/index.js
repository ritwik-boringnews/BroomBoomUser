import { View, Text,Button } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  )
}

export default Welcome