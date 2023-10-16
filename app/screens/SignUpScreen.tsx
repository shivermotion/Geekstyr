import React, { FC, useState } from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, View, Text, Input, InputField, Image, Checkbox } from "@gluestack-ui/themed"
// Import any other required components or utilities

interface SignUpProps {
  // Add any props if necessary
}

export const SignUpScreen: FC<SignUpProps> = observer(function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignUp = () => {
    // Implement the logic to sign up
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.avatarContainer}>
        <Image alt="avatar" source={{ uri: 'YOUR_DEFAULT_AVATAR_URI' }} style={styles.avatar} />
        {/* Add the '+' button here for image upload */}
      </View>

      <Input
        style={styles.input}
        values={name}
        onChangeText={setName}
        label="Name"
      >
        <InputField placeholder="Name" />
      </Input>

      <Input
        style={styles.input}
        values={email}
        onChangeText={setEmail}
        label="Email"
      >
        <InputField placeholder="Email" />
      </Input>

      <Input
        style={styles.input}
        values={password}
        onChangeText={setPassword}
        label="Password"
      >
        <InputField placeholder="Password" secureTextEntry={true} />
      </Input>

      <Checkbox
        checked={termsAccepted}
        onPress={() => setTermsAccepted(!termsAccepted)}
        label="I agree to the Terms of Service"
      />

      <Button style={styles.button} variant="solid" bgColor="$purple300" onPress={handleSignUp}>
        <Text>Create an Account</Text>
      </Button>

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.linkText}>Sign In</Text>
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
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#9F8FEF',
    justifyContent: 'center',
    alignItems: 'center',
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
