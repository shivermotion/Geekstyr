import React, { FC, useState } from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Chat, MessageType } from '@flyerhq/react-native-chat-ui'
import { View } from "@gluestack-ui/themed"
// import { SafeAreaProvider } from "react-native-safe-area-context"


interface MessengerScreenProps {
    // Add any props if necessary, such as user avatars or actions on button press
}

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16)
    const v = c === 'x' ? r : (r % 4) + 8
    return v.toString(16)
  })
}


export const MessengerScreen: FC<MessengerScreenProps> = observer(function MessengerScreen() {
  const [messages, setMessages] = useState<MessageType.Any[]>([])
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' }

  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages])
  }

  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    }
    addMessage(textMessage)
  }

  return (
    // Remove this provider if already registered elsewhere
    // or you have React Navigation set up
    // <SafeAreaProvider>
    <View style={styles.container}> 
      <Chat
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
      />
   </View> 
      // </SafeAreaProvider>
  )
})

const styles = StyleSheet.create({

    container: {

        flex: 1,
      
    },
 
});
