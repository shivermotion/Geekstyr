import React from 'react';
import { Box, Text, Image, } from "@gluestack-ui/themed";
import { TextInput } from 'react-native';


function AddFavoriteGamesScreen() {
  return (
    <Box flex={1} bgColor="#4B0082" justifyContent="center" alignItems="center">
      
      <Box alignItems="center">
        <Image 
          size="2xl"
          borderRadius={2}
          source={require("../../../assets/images/custom-assets/giga-chad.jpg")}
          alt='avatar' 
        />
        <Text fontSize="$xl" mt="$4" color="white">Add Favorite Games</Text>
        <Text fontSize="$lg" mt="$2" color="white">Please choose some of your favorite games</Text>
      </Box>
      
      <Box width="80%" mt="$4">
        <TextInput 
          placeholder="Search"
        />
      </Box>
      
      <Box flexDirection="row" alignItems="center" mt="$4" width="80%" p="$2" bgColor="white" borderRadius="$md">
        <Image 
          size="lg"
          borderRadius={2}
          source={require("../../../assets/images/custom-assets/GoldenEye007box.jpg")}
          alt='game' 
        />
        <Text ml="$2">Goldeneye</Text>
        {/* Add an icon or button for the trash bin on the right */}
      </Box>
    </Box>
  );
}

export default AddFavoriteGamesScreen;
