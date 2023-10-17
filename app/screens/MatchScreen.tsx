import React, { FC } from "react"
import { StyleSheet, ImageBackground } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, View, Text, Image } from "@gluestack-ui/themed"
// Import other required components or utilities

interface MatchScreenProps {
    // Add any props if necessary, such as user avatars or actions on button press
}

export const MatchScreen: FC<MatchScreenProps> = observer(function MatchScreen() {
    const handleSendMessage = () => {
        // Implement the action for sending a message
    }

    const handleDiscoverMoreMatches = () => {
        // Implement the action for discovering more matches
    }

    return (
        <ImageBackground source={{ uri: 'path_to_confetti_background_image' }} style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: 'path_to_first_avatar' }} style={styles.avatar} />
                <Image source={{ uri: 'path_to_second_avatar' }} style={styles.avatar} />
            </View>

            <Text style={styles.matchText}>It’s a match!</Text>

            <Button style={styles.button} variant="solid" bgColor="$purple300" onPress={handleSendMessage}>
                <Text>Send a Message</Text>
            </Button>

            <Button style={styles.discoverButton} variant="solid" onPress={handleDiscoverMoreMatches}>
                <Text>Discover more Matches</Text>
            </Button>
        </ImageBackground>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7B4FDB',
    },
    avatarContainer: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginHorizontal: 10,
        borderColor: '#FFF',
        borderWidth: 2,
    },
    matchText: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
    discoverButton: {
        marginTop: 10,
    },
});
