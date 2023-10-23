/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { AppStackScreenProps } from 'app/navigators';
import { observer } from 'mobx-react-lite';
import { Box, Icon, Avatar, AvatarBadge, AvatarFallbackText, Center, Image, AvatarImage } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';


async function loadFonts() {
  await Font.loadAsync({
    'Final_Fantasy_VII': require('../../assets/fonts/Final_Fantasy_VII.ttf'), // adjust the path accordingly
  });
}

loadFonts();

interface ProfileScreenProps extends AppStackScreenProps<"LogIn"> { }

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  return (
    
    <LinearGradient colors={['#4169E1', '#000000']} style={styles.container}>
   <ScrollView style={{  flexGrow:1 }}>
        <Center p={8}>
          <Avatar bgColor="$indigo600" size='2xl' borderRadius={"$full"}>
            <AvatarImage source={ require("../../assets/images/custom-assets/giga-chad.jpg")} alt="Prompt related image" />
            {/* <AvatarFallbackText>Giga Chad</AvatarFallbackText> */}
            <AvatarBadge
              sx={{
                _dark: {
                  borderColor: "$black",
                },
              }}
            />
          </Avatar>
        </Center>
        <Box style={styles.headerBox}>
          <Text style={styles.text}> Giga Chad</Text>
        </Box>
        <Box style={styles.dataBox}>
          <Text style={styles.text}> Love Level: 99</Text>
        </Box>
        <Box style={styles.dataBox}>
          <Text style={styles.text}> HP: 8573/9999</Text>
        </Box>
        <Box style={styles.dataBox}>
          <Text style={styles.text}> MP: 943/ 999</Text>
        </Box>
        <Box style={styles.bigImage}>
          <Image source="https://placehold.co/640x480" alt="Prompt related image"  />
        </Box>
        <Box style={styles.bioBox}>
          <Text style={styles.bioText}>Bio: Adventurous traveler, game enthusiast, and coffee lover. Looking for someone to share life's next big quest.</Text>
        </Box>
        <Box style={styles.bigImage}>
          <Image source="https://placehold.co/640x480" alt="Prompt related image"  />
        </Box>
        <Box style={styles.promptBox}>
          <Text style={styles.promptText}>If I were a video game character, I'd be... Mario, always looking for my princess in another castle.</Text>
        </Box>
        <Box style={styles.bigImage}>
          <Image source="https://placehold.co/640x480" alt="Prompt related image"  />
        </Box>
        <Box style={styles.preferenceBox}>
          <Text style={styles.preferenceText}>Preferences: Loves long walks, enjoys multiplayer games, prefers cats over dogs.</Text>
        </Box>
         
       
    
      </ScrollView>
     </LinearGradient>
      
  );
})


const styles = StyleSheet.create({
  bigImage: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    height: '50%',
    marginBottom: 16,
    width: '100%',
  },
  bioBox: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 8,
    padding: 8,
  },
  bioText: {
    color: '#FFFFFF',
    fontFamily: 'Final_Fantasy_VII',
    fontSize: 28,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  dataBox: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 8,
  },
  headerBox: {
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    flexDirection: 'row',
    marginBottom: 8,
  },
  preferenceBox: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 8,
    padding: 8,
  },
  preferenceText: {
    color: '#FFFFFF',
    fontFamily: 'Final_Fantasy_VII',
    fontSize: 28,
  },
  promptBox: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    fontFamily: 'Final_Fantasy_VII',
    marginBottom: 8,
    padding: 8,
  },
  promptText: {
    color: '#FFFFFF',
    fontFamily: 'Final_Fantasy_VII',
    fontSize: 28,
    
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Final_Fantasy_VII',
    fontSize: 28,
  },
});
