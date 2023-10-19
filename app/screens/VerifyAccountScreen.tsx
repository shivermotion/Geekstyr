import React, { FC, useState } from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, View, Text, Input, InputField } from "@gluestack-ui/themed"
// Import any other required components or utilities

interface VerifyAccountScreenProps {
  // Add any props if necessary
}

export const VerifyAccountScreen: FC<VerifyAccountScreenProps> = observer(function VerifyAccountScreen() {
  const [code, setCode] = useState('');

  const handleVerifyAccount = () => {
    // Implement the verification logic
  }

  const handleResendCode = () => {
    // Implement the resend code logic
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your account</Text>

      <Text style={styles.message}>We've sent your verification code to tansonbothe@gmail.com</Text>

      <Input
        style={styles.input}
        value={code}
        onChangeText={setCode}
        label="Enter code"
        keyboardType="numeric"
      >
        <InputField placeholder="####" maxLength={4} />
      </Input>

      <Button style={styles.button} variant="solid" bgColor="$purple300" onPress={handleVerifyAccount}>
        <Text>Verify My Account</Text>
      </Button>

      <Button style={styles.resendButton} variant="solid" onPress={handleResendCode}>
        <Text>Resend Code<Text style={styles.timer}>1.40 min left</Text></Text>
      </Button>


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
  message: {
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  resendButton: {
    alignSelf: 'center',
    marginBottom: 10,
    width: "100%",

  },
  timer: {
    color: '#FFF',
    alignSelf: 'center',
  },
});
