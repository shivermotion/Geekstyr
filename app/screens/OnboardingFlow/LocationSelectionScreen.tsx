import React from 'react';
import { Box, Button, Image, Text } from "@gluestack-ui/themed";

import { observer } from 'mobx-react-lite';

// interface LocationSelectionScreenProps extends AppStackScreenProps<"LocationSelection"> { }

export const LocationSelectionScreen = observer(function LocationSelectionScreen() {
    // Sample state to handle location selection
    const [selectedLocation] = React.useState(null);

    return (
        <Box flex={1} bgColor="#2E2E5E" alignItems="center" justifyContent="center" p="$4">
            {/* Avatar */}
            <Box mb="$4">
                <Image
                    source={require('../../../assets/images/custom-assets/giga-chad.jpg')}
                    size="xl"
                    alt="User Avatar"
                />
            </Box>

            {/* Progress Indicator - placeholder */}
            <Text color="white" mb="$4">1/5</Text>

            {/* Location Selection Title */}
            <Text fontSize="$2xl" color="white" mb="$2">Set your current location</Text>
            <Text fontSize="$lg" color="white" mb="$6">Please select your current location to enhance your experience</Text>

            {/* Location options */}
            {['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Berlin'].map((location) => (
                <Box
                    key={location}
                    flexDirection="row"
                    alignItems="center"
                    width="100%"
                    mt="$2"
                    bgColor={selectedLocation === location ? "#664FC8" : "transparent"}
                    borderRadius="$lg"
                    p="$2"
                    // On press of each location box, update the selected location
                    // onPress={() => setSelectedLocation(location)}
                >
                    <Text fontSize="$lg" color="white">{location}</Text>
                </Box>
            ))}

        </Box>
    );
});

export default LocationSelectionScreen;
