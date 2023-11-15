import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Icon} from 'react-native-paper';
import {ArrowDown} from '../assets';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Text>this</Text>
      <Icon source={ArrowDown} size={10} />
      <Button onPress={() => navigation.navigate('Home')} mode="contained">
        to Home
      </Button>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Tab = createBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: ({focused, color}) => {
          return <ArrowDown color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
