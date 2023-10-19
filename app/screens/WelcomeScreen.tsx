import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Button,  View, ViewStyle } from "react-native"
import { colors } from "../theme"
import { AppStackScreenProps } from "app/navigators"
import { useNavigation } from '@react-navigation/native';
import { Box, ScrollView } from "@gluestack-ui/themed"
import { SafeAreaProvider } from "react-native-safe-area-context"


interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> { }

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const navigation = useNavigation();

  return (

    <ScrollView style={$container}>
      <Box p={"$5"} marginTop={"$20"}>
        <Button
          title="Launch"
          onPress={() => navigation.navigate('Launch')}
        />
        </Box>
      
      <Box p={"$5"}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
      />
      </Box>
      <Box p={"$5"}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate('LogIn')}
      />
      </Box>
      <Box p={"$5"}>
        <Button
          title="Forgot Password"
          onPress={() => navigation.navigate('ForgotPassword')}
      />
      </Box>
      <Box p={"$5"}>
        <Button
          title="Verify Account"
          onPress={() => navigation.navigate('VerifyAccount')}
      />
      </Box>
      <Box p={"$5"}>
        <Button
          title="Match!"
          onPress={() => navigation.navigate('Match')}
        />
        </Box>
      <Box p={"$5"}>
        <Button
          title="Avatar Creator"
          onPress={() => navigation.navigate('AvatarCreator')}
        />
        </Box>
      <Box p={"$5"}>
        <Button
          title="Avatar Viewer"
          onPress={() => navigation.navigate('AvatarViewer')}
        />
        </Box>
      <Box p={"$5"}>
        <Button
          title="Swiper"
          onPress={() => navigation.navigate('Swiper')}
        />
        </Box>
      <Box p={"$5"}>
        <Button
          title="Messenger"
          onPress={() => navigation.navigate('Messenger')}
        />
        </Box>
      <Box p={"$5"}>
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        </Box>
      </ScrollView>
     
  )
})

const $container: ViewStyle = {
  flex: 1,
  padding: 10,
  margin: 20,
  backgroundColor: colors.background,
}

