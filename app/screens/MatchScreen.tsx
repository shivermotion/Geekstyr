import React, { FC } from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, View, Text, Image } from "@gluestack-ui/themed"
import ConfettiCannon from 'react-native-confetti-cannon';
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
        <View style={styles.container}>
            <ConfettiCannon count={200} fallSpeed={3000} origin={{x: -10, y: 0}}  />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: 'path_to_first_avatar' }} style={styles.avatar} alt="match1" />
                <Image source={{ uri: 'path_to_second_avatar' }} style={styles.avatar} alt="match2"  />
            </View>
            <Text style={styles.matchText}>It’s a match!</Text>
              <Button style={styles.button} variant="solid" bgColor="$purple300" onPress={handleSendMessage}>
                <Text> Send a Message</Text>
              </Button>
            <Button style={styles.discoverButton} variant="solid" onPress={handleDiscoverMoreMatches}>
                <Text>Discover more Matches</Text>
            </Button>
        </View>
    );
})

const styles = StyleSheet.create({
    avatar: {
        borderColor: '#FFF',
        borderRadius: 40,
        borderWidth: 2,
        height: 80,
        marginHorizontal: 10,
        width: 80,
    },
    avatarContainer: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    button: {
        marginBottom: 10,
        marginTop: 20,
        width: '100%',
    },
    confetti: {
        zIndex: 10,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#7B4FDB',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    discoverButton: {
        marginTop: 10,
    },
    matchText: {
        color: '#FFF',
        fontSize: 24,
        marginBottom: 20,
    },
});
