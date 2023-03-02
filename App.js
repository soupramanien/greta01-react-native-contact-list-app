import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import ContactDetails from './ecrans/ContactDetails';
import ContactList from './ecrans/ContactList';
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
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
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
              },
              headerTitle: () => <Image
                source={require('./assets/icon.png')}
                style={{ width: 30, height: 30 }}
              />,
              headerRight: () => <Button title='btn-droit' onPress={() => alert('test')} color='#f00' />
              // headerTitle: () => <Text>Liste de contacts (test)</Text>
              // headerTitle: 'Liste de contacts'
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
