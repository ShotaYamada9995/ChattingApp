import React, {useEffect} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import Home from '../screens/Home';
import ExploreScreen from '../screens/ExploreScreen';
import AudioRoomScreen from '../screens/AudioRoomScreen';
import ChatScreen from '../screens/Chats';
import VideoPicker from '../screens/CreateMedia/VideoPicker';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils';
import {useNavigation} from '@react-navigation/native';

const MainTab = createBottomTabNavigator();

const VideoPickerScreen = () => {
  return <View />;
};

const Main = () => {
  const navigation = useNavigation();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#001433',
          borderTopWidth: 0,
          paddingBottom: 0,
          height: WINDOW_HEIGHT * 0.07,
        },
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarItemStyle: {marginVertical: 5},
      }}>
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              color={focused ? 'white' : 'grey'}
              size={WINDOW_WIDTH * 0.06}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="compass"
              type="ionicon"
              color={focused ? 'white' : 'grey'}
              size={WINDOW_WIDTH * 0.06}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="VideoPickerScreen"
        component={VideoPickerScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Pressable onPress={() => navigation.navigate('CreateMedia')}>
              <LinearGradient
                colors={['#FDD819', '#E80505']}
                start={{x: 0.5, y: 0}}
                style={styles.postIcon}>
                <Icon name="add" color="white" size={25} />
              </LinearGradient>
            </Pressable>
          ),
        }}
      />
      <MainTab.Screen
        name="Notification"
        component={AudioRoomScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="notifications"
              color={focused ? 'white' : 'grey'}
              size={WINDOW_WIDTH * 0.06}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="person"
              color={focused ? 'white' : 'grey'}
              size={WINDOW_WIDTH * 0.06}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  postIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH * 0.15,
    aspectRatio: 1,
    borderRadius: 100,
    marginTop: -(WINDOW_WIDTH * 0.15),
  },
});
