import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, View, Image, Text, Input, InputField } from "@gluestack-ui/themed"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LogInScreenProps extends AppStackScreenProps<"LogIn"> { }

export const LogInScreen: FC<LogInScreenProps> = observer(function LogInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Input
        style={styles.input}
        values={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        label="Email"
      >
        <InputField placeholder="Email" />
      </Input>
      <Input
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        label="Password"
      />

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <Button style={styles.button} variant="solid" bgColor="$purple300" onPress={() => { /* Handle Sign In */ }}>
        <Text> Sign In</Text>
      </Button>

      <Text style={styles.footerText}>Don't have an account? <Text style={styles.linkText}>Sign up</Text></Text>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#7B4FDB',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#FFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginBottom: 10,
  },
  footerText: {
    color: '#FFF',
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});
