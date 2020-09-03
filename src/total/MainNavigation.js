/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { imagesIcon } from '../total/style';
import HomeContainer from '../container/HomeContainer';
import ShowContainer from '../container/ShowContainer';
import SettingsScreen from '../compoment/SettingsScreen';
import MainScreenContainer from '../container/MainScreenContainer';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
// import Icon from 'react-native-vector-icons/FontAwesome';
function StackHomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="Next" component={ShowContainer} />
    </Stack.Navigator>
  );
}
function MainNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Main') {
              iconName = 'https://friconix.com/png/fi-onsuxx-dev-to.png';
            }
            else if (route.name === 'Home') {
              // iconName = focused ? 'https://reactnative.dev/img/tiny_logo.png' : 'https://img.icons8.com/material/4ac144/256/user-male.png';
              iconName = 'https://upload.wikimedia.org/wikipedia/commons/8/87/%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0_logo.png';
            } else if (route.name === 'Settings') {
              iconName = 'https://reactnative.dev/img/tiny_logo.png';
            }
            // You can return any component that you like here!
            // return <Icon size={size} name={iconName} color={color} />;
            return <Image
              style={imagesIcon}
              source={{
                uri: iconName,
              }}
            />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name="Main" component={MainScreenContainer} />
        <Tabs.Screen name="Home" component={StackHomeTab} />
        <Tabs.Screen name="Settings" component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
