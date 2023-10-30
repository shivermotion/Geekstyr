import React, { useState, FC } from 'react';
import { Box, Text, Image, Switch } from "@gluestack-ui/themed";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppStackScreenProps } from 'app/navigators';
import { observer } from 'mobx-react-lite';

interface MyAccountScreenProps extends AppStackScreenProps<"LogIn"> {}

export const MyAccountScreen: FC<MyAccountScreenProps> = observer(
  function MyAccountScreen() {
  const [isAvailableForMeetups, setAvailableForMeetups] = useState(true); // Example state for the switch
  
  return (
    <Box flex={1} bgColor="#4B0082" p="$4">
      
      <Box flexDirection="row" alignItems="center" mb="$4">
        <TouchableOpacity onPress={() => console.log("Go back pressed")}>
          {/* Insert back arrow icon here */}
        </TouchableOpacity>
        <Text fontSize="$xl" color="white" ml="$4">My Account</Text>
      </Box>
      
      <Box flexDirection="row" alignItems="center" mb="$4">
        <Image 
          size="lg"
          borderRadius={2}
          source={require('../../assets/images/custom-assets/giga-chad.jpg')} 
          alt='avatar' 
        />
        <Box ml="$4">
          <Text fontSize="$lg" color="white">CoolBabe202</Text>
          <Text color="white">coolbabe@email.com</Text>
        </Box>
      </Box>

      <Text fontSize="$lg" color="white" mb="$2">Account</Text>
      {/* List of Account options */}
      {["Change Password", "Notifications", "Privacy Settings", "Sign Out"].map((option) => (
        <TouchableOpacity key={option} onPress={() => console.log(`${option} pressed`)}>
          <Box flexDirection="row" alignItems="center" mb="$2">
            {/* Insert respective icon here */}
            <Text ml="$2" color="white">{option}</Text>
            {/* Insert right arrow icon here */}
          </Box>
        </TouchableOpacity>
      ))}

      <Text fontSize="$lg" color="white" mt="$4" mb="$2">More Options</Text>
      <Box flexDirection="row" alignItems="center" mb="$2">
        <Text color="white">Available for meetups?</Text>
        <Switch 
          value={isAvailableForMeetups}
          onValueChange={() => setAvailableForMeetups(!isAvailableForMeetups)}
        />
      </Box>
      {[
        { label: "Location", value: "Fort Worth, Texas" },
        { label: "Languages", value: "English" },
        { label: "Game System", value: "Xbox" }
      ].map((option) => (
        <TouchableOpacity key={option.label} onPress={() => console.log(`${option.label} pressed`)}>
          <Box flexDirection="row" alignItems="center" mb="$2">
            <Text color="white">{option.label}</Text>
            <Text ml="auto" color="white">{option.value}</Text>
            {/* Insert right arrow icon here */}
          </Box>
        </TouchableOpacity>
      ))}
      
    </Box>
  );
});

export default MyAccountScreen;
