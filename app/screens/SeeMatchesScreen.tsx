/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import {
  Box,
  Avatar,
  AvatarImage,
  Heading,
  HStack,
  VStack,
  FlatList,
  Text,
} from "@gluestack-ui/themed"




interface SeeMatchesScreenProps extends AppStackScreenProps<"LogIn"> {}

export const SeeMatchesScreen: FC<SeeMatchesScreenProps> = observer(function SeeMatchesScreen() {
  type ChatData = {
    id: string;
    fullName: string;
    avatarUrl: string;
    recentText: string;
    timeStamp: string;
  };

  const data: ChatData[] = [
    {
      id: "1",
      fullName: "Giga Chad",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "Hey, how are you?",
      timeStamp: "3:43 PM",
    },
    {
      id: "2",
      fullName: "Giga Greg",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "whats, good?",
      timeStamp: "3:43 PM",
    },
    {
      id: "3",
      fullName: "Giga Brad",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "Whats shakin?",
      timeStamp: "3:43 PM",
    },
    {
      id: "4",
      fullName: "Giga Lance",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "whats bakin?",
      timeStamp: "3:43 PM",
    },
    {
      id: "5",
      fullName: "Giga James",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "whats cookin?",
      timeStamp: "3:43 PM",
    },
    {
      id: "6",
      fullName: "Giga Kyle",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "what is love?",
      timeStamp: "3:43 PM",
    },
    {
      id: "7",
      fullName: "Giga Sad",
      avatarUrl: "https://placehold.co/640x480",
      recentText: "kill me?",
      timeStamp: "3:43 PM",
    },
  ]

  return (
    <Box py="$10">
      <Heading size="xl"  pb="$3">
        Matches
      </Heading>
      <FlatList
          data={data}
          renderItem={({ item }) => (
          <Box
            borderBottomWidth="$1"
            borderColor="$trueGray800"
            sx={{
              _dark: {
                borderColor: "$trueGray100",
              },
              "@base": {
                pl: 0,
                pr: 0,
              },
              "@sm": {
                pl: "$4",
                pr: "$5",
              },
            }}
              py={"$2"}
              
          >
            <HStack space="md" justifyContent="space-between" p={"$4"}>
              <Avatar size="md">
                <AvatarImage source={{ uri: item.avatarUrl}} />
              </Avatar>
              <VStack>
                <Text
                  color="$coolGray800"
                  fontWeight="$bold"
                  sx={{
                    _dark: {
                      color: "$warmGray100",
                    },
                  }}
                >
                  {item.fullName}
                </Text>
                <Text
                  color="$coolGray600"
                  sx={{
                    _dark: {
                      color: "$warmGray200",
                    },
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Text
                fontSize="$xs"
                color="$coolGray800"
                alignSelf="flex-start"
                sx={{
                  _dark: {
                    color: "$warmGray100",
                  },
                }}
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
})
