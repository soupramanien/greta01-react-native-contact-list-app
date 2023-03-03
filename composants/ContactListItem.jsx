import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactListItem(props) {
    const contact = props.contact
    const showContactDetails = props.showContactDetails
    return (
        <TouchableOpacity
            onPress={() => showContactDetails(contact.id, contact.name)}>
            <View style={styles.button}>
                <Text>{contact.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});