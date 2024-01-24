import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.backGround}>
        <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;