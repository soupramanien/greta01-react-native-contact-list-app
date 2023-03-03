import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import ContactDetails from './ecrans/ContactDetails';
import ContactList from './ecrans/ContactList';
import Favoris from './ecrans/Favoris';
import ContactStack from './navigateurs/ContactStack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

//création de navigateur
const Stack = createNativeStackNavigator();
//création d'un fournisseur de données (API Context)
export const MessageContext = createContext("")

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <MessageContext.Provider
      value='Bonjour tout le monde'>
      <NavigationContainer>
        <Tab.Navigator screenOptions={
          function (props) {
            return {
              tabBarIcon: function (tabBarProps) {
                let iconComp = null;
                if (props.route.name === 'ContactStack') {
                  const icon = tabBarProps.focused ? 'users' : 'users'
                  iconComp = <FontAwesome
                    name={icon}
                    size={tabBarProps.size}
                    color={tabBarProps.color} />
                }
                else if (props.route.name === 'Favoris') {
                  const icon = tabBarProps.focused ? 'star' : 'star-outline'
                  iconComp = <Ionicons
                    name={icon}
                    size={tabBarProps.size}
                    color={tabBarProps.color} />
                }
                return iconComp
              }
            }
          }
        }>
          <Tab.Screen
            name='ContactStack'
            component={ContactStack}
            options={{
              title: "Contacts",
              headerShown: false
            }} />
          <Tab.Screen name='Favoris' component={Favoris} />
        </Tab.Navigator>
      </NavigationContainer>
    </MessageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
