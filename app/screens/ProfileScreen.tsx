/* eslint-disable react-native/no-color-literals */
import React, { FC } from 'react';
import {  Text, StyleSheet } from 'react-native';
import { AppStackScreenProps } from 'app/navigators';
import { observer } from 'mobx-react-lite';
import { Box, Icon, ScrollView, Image ,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Center,
} from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';









interface ProfileScreenProps extends AppStackScreenProps<"LogIn"> { }

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {

  return (
       <LinearGradient colors={[ '#4169E1', '#000000']} style={styles.container}>
      <ScrollView style={styles.container}>
        <Center p={8}>
      <Avatar bgColor="$indigo600" size='2xl' borderRadius={"$md"}>
      <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
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
        <Icon  size={'md'} />
        <Text style={styles.text}>Cloud</Text>
      </Box>
      <Box style={styles.dataBox}>
        <Text style={styles.text}>LLV99 Fury</Text>
      </Box>
      <Box style={styles.dataBox}>
        <Text style={styles.text}>HP 8573/9999</Text>
      </Box>
      <Box style={styles.dataBox}>
        <Text style={styles.text}>MP 943/ 999</Text>
      </Box>
    </ScrollView>
      </LinearGradient>
  );
})

const styles = StyleSheet.create({
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
  menuBox: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});