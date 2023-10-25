import React from 'react';
import { Box,  Image, Pressable, Text } from "@gluestack-ui/themed";

const GameSystemSelectionScreen = () => {
    const [selectedSystem, setSelectedSystem] = React.useState(null);

    return (
        <Box flex={1} bgColor="#2E2E5E" alignItems="center" justifyContent="center" p="$4">
            {/* Avatar */}
            <Box mb="$4">
                <Image
                    source={require("../../../assets/images/custom-assets/giga-chad.jpg")}
                    size="xl"
                    alt="User Avatar"
                />
            </Box>

            {/* Progress Indicator */}
            <Text color="white" mb="$4">2/5</Text>

            {/* Game System Selection Title */}
            <Text fontSize="$2xl" color="white" mb="$2">Choose Game System</Text>
            <Text fontSize="$lg" color="white" mb="$6">Please select your preferred game system</Text>

            {/* Game System options */}
            {['Xbox', 'Playstation', 'Nintendo 64', 'Sega Genesis'].map((system) => (
                <Pressable
                onPress={() => setSelectedSystem(system)}
                bg="$primary500"
                sx={{ ":hover": { bg: "$primary400" } }}
                key={system}
              >
                <Box
                    key={system}
                    flexDirection="row"
                    alignItems="center"
                    width="100%"
                    mt="$2"
                    bgColor={selectedSystem === system ? "#664FC8" : "transparent"}
                    borderRadius="$lg"
                    p="$2"
                >
                <Text fontSize="$lg" color="white">{system}</Text>

                </Box>
                </Pressable>
            ))}
        </Box>
    );
};

export default GameSystemSelectionScreen;
