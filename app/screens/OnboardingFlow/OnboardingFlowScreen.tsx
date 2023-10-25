/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { Box, Button, ButtonText, Text, View } from "@gluestack-ui/themed"
import LocationSelectionScreen from "./LocationSelectionScreen"
import { AppStackScreenProps } from "app/navigators"
import GameSystemSelectionScreen from "./GameSystemSelectionScreen"

interface OnboardingFlowScreenProps extends AppStackScreenProps<"LogIn"> {}

export const OnboardingFlowScreen: FC<OnboardingFlowScreenProps> = observer(
  function OnboardingFlowScreen() {
    const [step, setStep] = useState(0)

    return (
      <View style={{ flex: 1 }} bgColor="#2E2E5E">
        {step === 0 ? (
          <LocationSelectionScreen />
        ) : step === 1 ? (
          <GameSystemSelectionScreen />
        ) : (
          "error"
        )}
        <Box mt="$6">
          <Button
            bgColor="#7A5BDE"
            size="xl"
            variant="solid"
            action="primary"
            m="$8"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => setStep(step + 1)}
          >
            <ButtonText fontSize="$xl" color="white">
              Next
            </ButtonText>
          </Button>
        </Box>
        <Box mt="$4">
          <Text
            fontSize="$md"
            color="white"
            // onPress={/* Handle skip action */}
          >
            Skip for now
          </Text>
        </Box>
      </View>
    )
  },
)

export default OnboardingFlowScreen
