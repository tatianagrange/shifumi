import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GameScreen from './src/screens/GameScreen';
import LogScoreScreen from './src/screens/LogScoreScreen';

import { Provider as ScoreProvider } from './src/context/ScoreContext'

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="LogScore" component={LogScoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <ScoreProvider>
        <TabNavigator />
      </ScoreProvider>
  );
}