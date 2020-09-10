/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {imagesIcon} from '../total/style';
import HomeContainer from '../container/HomeContainer';
import ShowContainer from '../container/ShowContainer';
import SettingsScreen from '../compoment/SettingsScreen';
import MainScreenContainer from '../container/MainScreenContainer';
import HeaderLogo from '../compoment/widget/HeaderLogo';
import SearchContainer from '../container/SearchContainer';
import {StyleOptionScreen} from './style';
import InforUserContainer from '../container/InforUserContainer';
import ShowPDFContainer from '../container/ShowPDFContainer';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
function StackHomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="Next" component={ShowContainer} />
    </Stack.Navigator>
  );
}
function StackMainTab() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreenContainer} />
      <Stack.Screen name="Seach" component={SearchContainer} />
    </Stack.Navigator>
  );
}
function StackInfoUser() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Infor">
      <Stack.Screen name="Infor" component={InforUserContainer} />
      <Stack.Screen name="ShowPDF" component={ShowPDFContainer} />
    </Stack.Navigator>
  );
}
function TabsNaviga() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'https://friconix.com/png/fi-onsuxx-dev-to.png';
          } else if (route.name === 'Home') {
            // iconName = focused ? 'https://reactnative.dev/img/tiny_logo.png' : 'https://img.icons8.com/material/4ac144/256/user-male.png';
            iconName =
              'https://upload.wikimedia.org/wikipedia/commons/8/87/%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0_logo.png';
          } else if (route.name === 'Settings') {
            iconName = 'https://reactnative.dev/img/tiny_logo.png';
          } else if (route.name === 'Infor') {
            iconName =
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/768px-Infobox_info_icon.svg.png';
          }
          // You can return any component that you like here!
          // return <Icon size={size} name={iconName} color={color} />;
          return (
            <Image
              style={imagesIcon}
              source={{
                uri: iconName,
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      initialRouteName="Infor">
      <Tabs.Screen name="Main" component={StackMainTab} />
      <Tabs.Screen name="Home" component={StackHomeTab} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
      <Tabs.Screen name="Infor" component={StackInfoUser} />
    </Tabs.Navigator>
  );
}
function MainNavigation() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          // console.log(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={TabsNaviga}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Next"
          component={ShowContainer}
          options={{
            style: StyleOptionScreen,
            header: ({navigation}) => (
              <HeaderLogo
                sendPop={() => {
                  navigation.pop();
                  navigation.pop();
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
