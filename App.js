import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import Splash from './src/screens/Splash';
import {Nunito_600SemiBold,Nunito_700Bold, useFonts} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded) {
    <AppLoading/>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        {/*Home Screen*/}
        <Stack.Screen name='Home' options={{headerShown:false,}}>
          {(props) => <Home {...props} channelName={"The Makers"}/>}
        </Stack.Screen>
        {/*About Screen*/}
        <Stack.Screen name='About' component={About} options={{headerTitleStyle:{fontSize:25,fontFamily:'Nunito_600SemiBold'},headerTitle:"ABOUT",headerTitleAlign:'center',}}/>
        {/*Contact Screen*/}
        <Stack.Screen name='Contact' component={Contact} options={{headerTitleStyle:{fontSize:25,fontFamily:'Nunito_600SemiBold'},headerTitle:"CONTACT",headerTitleAlign:'center'}}/>
        {/*Course Screen*/}
        <Stack.Screen name='Course' component={Course} options={{headerTitleStyle:{fontSize:25,fontFamily:'Nunito_600SemiBold'},headerTitle:"COURSES",headerTitleAlign:'center'}}/>
        {/*UserData Screen*/}
        <Stack.Screen name='UserData' component={UserData} options={{headerTitleStyle:{fontSize:25,fontFamily:'Nunito_600SemiBold'},headerTitle:"USERDATA",headerTitleAlign:'center'}}/>
        {/*Splash Screen*/}
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

