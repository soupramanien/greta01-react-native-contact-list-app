import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function ContactDetails(props) {
    const [id, setId] = useState(props.route.params.id);
    const [contact, setContact] = useState({});
    // const params = props.route.params
    // console.log(params);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data);
                setContact(data)
            })
    }, [id]);//chaque fois que l'id change, la fonction de callback d'useEffect est appelée
    if (contact.name) {
        return (
            <View>
                <Text>{contact.name}</Text>
                <Text>{contact.email}</Text>
                <Text>{contact.phone}</Text>
                <Text>{contact.address.city}</Text>
            </View>
        )
    }
}