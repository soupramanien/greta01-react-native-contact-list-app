const { createNativeStackNavigator } = require('@react-navigation/native-stack')
const { Image, Button } = require('react-native')
const { default: ContactDetails } = require('../ecrans/ContactDetails')
const { default: ContactList } = require('../ecrans/ContactList')

export default function ContactStack() {
    const Stack = createNativeStackNavigator()
    return (
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
                        source={require('../assets/icon.png')}
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
    )
}