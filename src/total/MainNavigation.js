import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../container/HomeContainer';
import ShowContainer from '../container/ShowContainer';
const Stack = createStackNavigator();
function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Next" component={ShowContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
