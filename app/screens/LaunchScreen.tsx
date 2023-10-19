import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from 'react-native';
import { AppStackScreenProps } from "app/navigators"
import { Button, View, Image, Text } from "@gluestack-ui/themed"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LaunchScreenProps extends AppStackScreenProps<"Launch"> { }

export const LaunchScreen: FC<LaunchScreenProps> = observer(function LaunchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} alt="lgogo" />
      </View>
      <Text style={styles.headerText}>Meet gamers.</Text>
      <Text style={styles.subHeaderText}>Find love.</Text>

      <Button style={styles.button} variant="solid" bgColor={"$white"} onPress={() => { /* Handle Email Signup */ }}>
        <Text>Sign up with Email</Text>
      </Button>
      <Button style={styles.button} variant="solid" bgColor={"$black"} onPress={() => { /* Handle Steam Connect */ }}>
        <Text> Connect with Steam</Text>
      </Button>

      <Text style={styles.footerText}>Already have an account? <Text style={styles.linkText}>Sign In</Text></Text>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B4FDB', // You can adjust this color to fit your design
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    width: 200,
    marginBottom: 10,
  },
  footerText: {
    color: '#FFF',
    marginTop: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});
