import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen/LoginScreen.js';
import CadastroScreen from './src/pages/CadastroScreen/CadastroScreen.js';
import ChatScreen from './src/pages/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="login">
       <Stack.Screen name="login" component={LoginScreen} />
       <Stack.Screen name="cadastro" component={CadastroScreen} />
       <Stack.Screen name="chat" component={ChatScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

export default App;