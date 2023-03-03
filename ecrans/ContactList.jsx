import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContactListItem from "../composants/ContactListItem";

export default function ContactList(props) {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadContacts = async () => {
        setLoading(true)
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data);
        setContacts(data)
        setLoading(false)
    }
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => { return res.json() })
        //     .then((data) => {
        //         console.log(data);
        //         setContacts(data)
        //     })
        loadContacts()
    }, []);
    const showContactDetails = (id, name) => {
        props.navigation.navigate('contactDetails', { id: id, name: name })
    }
    return (
        <View style={styles.container}>
            <Text>Contact List</Text>
            <FlatList
                data={contacts}
                keyExtractor={(contact) => contact.id}
                renderItem={function (params) {
                    return (
                        <ContactListItem
                            contact={params.item}
                            showContactDetails={showContactDetails} />
                    )
                }}
                onRefresh={loadContacts}
                refreshing={loading}
            // renderItem={({ item }) => {
            //     return (
            //         <ContactListItem
            //             contact={item}
            //             showContactDetails={showContactDetails} />
            //     )
            // }}
            />
            {/* {contacts.map((contact) => {
                return (
                    <TouchableOpacity
                        key={contact.id}
                        onPress={() => showContactDetails(contact.id, contact.name)}>
                        <View style={styles.button}>
                            <Text>{contact.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })} */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});