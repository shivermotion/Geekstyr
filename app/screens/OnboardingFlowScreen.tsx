/* eslint-disable react-native/no-inline-styles */
import React, { useState , FC } from 'react';
import { AppStackScreenProps } from 'app/navigators';
import {  TouchableOpacity } from 'react-native';
import { Box, Image, Text } from "@gluestack-ui/themed";
import { observer } from 'mobx-react-lite';
// import LottieView from 'lottie-react-native';

interface OnboardingFlowScreenProps extends AppStackScreenProps<"LogIn"> { }

export const OnboardingFlowScreen: FC<OnboardingFlowScreenProps> = observer(function OnboardingFlowScreen() {
  const [message, setMessage] = useState("Welcome to the world of Pokémon.");
  const [step, setStep] = useState(0);
  const [image, setImage] = useState(require('../../assets/images/custom-assets/girl-grin.png'));


  const handlePress = () => {
    if (step === 0) {
      setMessage("This world is inhabited by creatures called Pokémon!");
      setStep(1);
    } else if (step === 1) {
      setMessage("Before we go any further, I'd like to know a bit about you.");
      setStep(2);
    } else if (step === 2) {
      setMessage("First, what is your name?");
      setImage(require("../../assets/images/custom-assets/girl-wink.png"));
      setStep(3);
    } else if (step === 3) {
      setMessage("Right! So your name is blank!");
      setStep(4);
    } else if (step === 4) {
      setMessage("This is my grandson. He's been your rival since you were a baby.");
      setStep(5);
    } else if (step === 5) {
      setMessage("...Erm, what is his name again?");
      setStep(6);
    } else if (step === 6) {
      setMessage("That's right! I remember now! His name is blank!");
      setStep(7);
    } else if (step === 7) {
      setMessage("blank! Your very own Pokémon legend is about to unfold!");
      setStep(8);
    } else if (step === 8) {
      setMessage("A world of dreams and adventures with Pokémon awaits! Let's go!");
      setStep(9);
    } else {
      setMessage("Welcome to the world of Pokémon.");
      setStep(0);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress} style={{ flex: 1 }}>
    <Box flex={1}  bgColor="#B4D0E7" justifyContent="center" alignItems="center">
      <Box>
      <Image
   size="2xl"
   borderRadius={2}
   source={image} alt='face' />
      </Box>
      <Box mt="$5" p="$4" width="80%" bgColor="white" borderRadius="$lg" alignItems="center">
        <Text fontSize="$lg">{message}</Text>
      </Box>
    </Box>
    </TouchableOpacity>
  );
});

export default OnboardingFlowScreen;
