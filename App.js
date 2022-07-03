import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/Screens/Home';
import Sobre from './src/Screens/Sobre';
import Produto from './src/Screens/Produto/Produto';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{headerTitle: 'Detalhes'}}
      />
    </Stack.Navigator>
  );
};

const icons = {
  HomeScreen: {
    name: 'ios-home',
  },
  Sobre: {
    name: 'ios-people',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
