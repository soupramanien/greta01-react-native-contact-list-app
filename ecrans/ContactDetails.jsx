import { useEffect, useLayoutEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function ContactDetails(props) {
    const [id, setId] = useState(props.route.params.id);
    const [contact, setContact] = useState({});
    const [compteur, setCompteur] = useState(0);
    // const params = props.route.params
    // console.log(params);
    const incCompteur = () => {
        // setCompteur((oldCompteur) => oldCompteur + 1)
        setCompteur(function (oldCompteur) {
            return oldCompteur + 1
        })
    }
    const decCompteur = () => {
        // setCompteur((oldCompteur) => oldCompteur + 1)
        setCompteur(function (oldCompteur) {
            return oldCompteur - 1
        })
    }
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => <Button title="+" color='#FFF' onPress={incCompteur} />,
            headerLeft: () => <Button title="-" color='#FFF' onPress={decCompteur} />
        })
    }, [])

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
                <Text>{compteur}</Text>
                <Text>{contact.name}</Text>
                <Text>{contact.email}</Text>
                <Text>{contact.phone}</Text>
                <Text>{contact.address.city}</Text>
            </View>
        )
    }
}