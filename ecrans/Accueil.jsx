import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { MessageContext } from "../App";

export default function Accueil(props) {
    const navigation = props.navigation;
    const message = useContext(MessageContext);
    return (
        <View>
            <Text>{message}</Text>
            <Button
                title="Afficher la page 'détails'"
                onPress={() => navigation.navigate('Details')} />
        </View>
    )
}