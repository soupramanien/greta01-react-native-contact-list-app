import { Button, Text, View } from "react-native";

export default function Details(props) {
    return (
        <View>
            <Text>{props.message}</Text>
            <Button
                title="Afficher la page 'Accueil'"
                onPress={() => props.navigation.navigate('Accueil')} />
        </View>
    )
}