import React, { FC, useState } from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, View, Text, Input, InputField } from "@gluestack-ui/themed"
// Import any other required components or utilities

interface ForgotPasswordProps {
  // Add any props if necessary
}

export const ForgotPasswordScreen: FC<ForgotPasswordProps> = observer(function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    // Implement the logic to send password reset email
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.instruction}>
        Enter your email and we will send you a password reset email.
      </Text>

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

      <Button style={styles.button} variant="solid" bgColor="$purple300" onPress={handleSend}>
        <Text>Send</Text>
      </Button>

      <Text style={styles.footerText}>
        Remembered your password? <Text style={styles.linkText}>Sign In</Text>
      </Text>
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
  instruction: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginTop: 20,
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
