import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './ecrans/Accueil';
import ContactDetails from './ecrans/ContactDetails';
import ContactList from './ecrans/ContactList';
import Details from './ecrans/Details';
//création de navigateur
const Stack = createNativeStackNavigator();
//création d'un fournisseur de données (API Context)
export const MessageContext = createContext("")

export default function App() {
  return (
    <MessageContext.Provider
      value='Bonjour tout le monde'>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='contactList'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f00'
            },
            headerTintColor: '#fff'
          }}
        >
          <Stack.Screen
            name='contactList'
            component={ContactList}
            options={{
              title: 'Liste de contacts',
              headerStyle: {
                backgroundColor: '#DDD'
              },
              headerTintColor: '#f00',
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#00f'
              }
            }}
          />
          <Stack.Screen
            name='contactDetails'
            component={ContactDetails}
            initialParams={{ id: 0, name: "Inconnu" }}
            options={({ route }) => ({ title: route.params.name })}
          />
          {/* <Stack.Screen name='Details' options={{ title: "Page de détails" }}>
            {(props) => <Details {...props} message="message de test" />}
          </Stack.Screen>
          <Stack.Screen
            name='Accueil'
            component={Accueil}
            options={{ title: "Page d'accueil" }}
          /> */}
        </Stack.Navigator>
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
