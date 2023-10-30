import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Button,  ViewStyle } from "react-native"
import { colors } from "../theme"
import { AppStackScreenProps } from "app/navigators"
import { useNavigation } from '@react-navigation/native';
import { Box, ScrollView } from "@gluestack-ui/themed"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> { }

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {

  const navigation = useNavigation();

  return (

    <ScrollView style={$container}>
      <Box p={"$5"} >
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
          title="Match Success!"
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
      <Box p={"$5"}>
        <Button
          title="See Matches"
          onPress={() => navigation.navigate('SeeMatches')}
        />
        </Box>
      <Box p={"$5"}>
        <Button
          title="Onboarding Flow"
          onPress={() => navigation.navigate('OnboardingFlow')}
        />
      </Box>
      <Box p={"$5"}>
        <Button
          title="My Account"
          onPress={() => navigation.navigate('MyAccount')}
        />
        </Box>
      </ScrollView>
     
  )
})

const $container: ViewStyle = {
  flex: 1,
 marginVertical: 44,
  backgroundColor: colors.background,
}

