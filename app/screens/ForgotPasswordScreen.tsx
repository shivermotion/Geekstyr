import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Icon, ChevronLeftIcon, Center, Heading, Divider, Input, InputField, ButtonText, Button, Text } from "@gluestack-ui/themed";

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <Box p="$4">
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Button onPress={() => navigation.goBack()}>
          <Icon as={ChevronLeftIcon} m="$2" w="$4" h="$4" />
        </Button>
        <Center flex={1}>
          <Heading>Forgot Password</Heading>
        </Center>
      </Box>
      <Divider />
      <InputBox placeholder='Enter Text here' />
      <InfoText> Enter your email and will send you a password reset email.</InfoText>
      <SendButton />
    </Box>
  );
}

const InputBox = ({ placeholder }) => (
  <Box my="$2">
    <Input variant="outline" size="md">
      <InputField placeholder={placeholder} />
    </Input>
  </Box>
);

const InfoText = ({ children }) => (
  <Box my="$2">
    <Text>{children}</Text>
  </Box>
);

const SendButton = () => (
  <Box my="$2">
    <Button size="md" variant="solid" action="primary">
      <ButtonText>Send </ButtonText>
    </Button>
  </Box>
);

export default ForgotPasswordScreen;
