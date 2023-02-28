import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactList(props) {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data);
                setContacts(data)
            })
    }, []);
    const showContactDetails = (id, name) => {
        props.navigation.navigate('contactDetails', { id: id, name: name })
    }
    return (
        <View style={styles.container}>
            <Text>Contact List</Text>
            {contacts.map((contact) => {
                return (
                    <TouchableOpacity
                        key={contact.id}
                        onPress={() => showContactDetails(contact.id, contact.name)}>
                        <View style={styles.button}>
                            <Text>{contact.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
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