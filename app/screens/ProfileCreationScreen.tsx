/* eslint-disable react-native/no-inline-styles */
import React, { useState , FC } from 'react';
import { AppStackScreenProps } from 'app/navigators';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Text } from "@gluestack-ui/themed";

import { observer } from 'mobx-react-lite';

interface ProfileCreationScreenProps extends AppStackScreenProps<"LogIn"> { }

export const ProfileCreationScreen: FC<ProfileCreationScreenProps> = observer(function ProfileCreationScreen() {
  const [message, setMessage] = useState("Welcome to the world of Pokémon.");
  const [step, setStep] = useState(0);

  const handlePress = () => {
    if (step === 0) {
      setMessage("This world is inhabited by creatures called Pokémon!");
      setStep(1);
    } else if (step === 1) {
      setMessage("Before we go any further, I'd like to know a bit about you.");
      setStep(2);
    } // ... add more steps as needed
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress} style={{ flex: 1 }}>
    <Box flex={1}  bgColor="#B4D0E7" justifyContent="center" alignItems="center">
      <Box>
        <Image
          source={require('./path-to-your-pokemon-professor-image.png')}
          style={{
            width: 150, // adjust based on your image's dimensions
            height: 200, // adjust based on your image's dimensions
            resizeMode: 'contain',
          }}
        />
      </Box>
      <Box mt="$5" p="$4" width="80%" bgColor="white" borderRadius="$lg" alignItems="center">
        <Text fontSize="$lg">{message}</Text>
      </Box>
    </Box>
    </TouchableOpacity>
  );
});

export default ProfileCreationScreen;
