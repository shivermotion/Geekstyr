import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {  StyleSheet } from "react-native"
import {  Box, Image, VStack, View } from "@gluestack-ui/themed"
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackParamList } from '../navigators/AppNavigator';



interface AvatarViewerProps {
  avatarUrl: string;
}

export const AvatarViewer: FC<AvatarViewerProps> = observer(function AvatarViewer() {
  const route = useRoute<RouteProp<AppStackParamList, 'AvatarViewer'>>();

  const avatarUrl = route.params?.avatarUrl + "/image" ?? "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  console.log(avatarUrl);

  return (
<View style={styles.container}  >
   
        <Box h='-$full' justifyContent='center'>
          <VStack space="md" reversed={false} >
            <Box w='$20' h='$20' bg='$blue300' />
          <Box w='$20' h='$20' >
            <Image
        size="md"
        source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        }}
        alt="avatar"
          />
        </Box>
            <Box w='$20' h='$20' bg='$blue500' />
          </VStack>
        </Box>
    </View>
 
  )
})




const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    backgroundColor: "#800080",
    flex: 1,
  },
 
});

