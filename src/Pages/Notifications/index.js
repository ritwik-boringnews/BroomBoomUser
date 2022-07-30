import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

const Notifications = () => {
  const DATA = [
    {
      image: require('../../../assets/notification.png'),
      title: 'You have earned ₹50 Reward',
      subtitle:
        'Long Description Nemo enim ipsam{"\n"} voxoxhhs hahshcg vohmsk',
      icon: require('../../../assets/icon.png'),
      date: '27 May at 12:23 pm',
    },
    {
      image: require('../../../assets/notification.png'),
      title: 'You have earned ₹50 Reward',
      subtitle:
        'Long Description Nemo enim ipsam{"\n"} voxoxhhs hahshcg vohmsk',
      icon: require('../../../assets/icon.png'),
      date: '27 May at 12:23 pm',
    },
    {
      image: require('../../../assets/notification.png'),
      title: 'You have earned ₹50 Reward',
      subtitle:
        'Long Description Nemo enim ipsam{"\n"} voxoxhhs hahshcg vohmsk',
      icon: require('../../../assets/icon.png'),
      date: '27 May at 12:23 pm',
    },
  ];
  const ListItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 15,

          marginHorizontal: 30,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              marginTop: 10,
              marginLeft: 20,

              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
          <View style={{paddingLeft: 30}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 10,
              }}>
              {item.subtitle}
            </Text>
            <Text style={{fontSize: 12}}>{item.date}</Text>
          </View>
        </View>
        <View style={{borderTopWidth: 1}}>
          <Image
            source={item.icon}
            style={{
              marginTop: 10,
              marginHorizontal: 12,
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={DATA} renderItem={ListItem} keyExtractor={e => e.title} />
    </View>
  );
};

export default Notifications;
