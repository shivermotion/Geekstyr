import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigators/AppNavigator';
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {  StyleSheet } from "react-native"
import { View, } from "@gluestack-ui/themed"
import RPMWebView from "app/readyplayerme/component/RPMWebView"

interface AvatarCreatorProps {
  // Add any props if necessary
}

export const AvatarCreator: FC<AvatarCreatorProps> = observer(function AvatarCreator() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'AvatarCreator'>>();

  return (
    <View style={styles.container}>
      <RPMWebView handleAvatarExported={(avatarUrl) => {
        navigation.navigate('AvatarViewer', { avatarUrl });
      }} />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});