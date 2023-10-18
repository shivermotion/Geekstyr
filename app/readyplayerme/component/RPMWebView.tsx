import React, {useRef} from "react";
import WebView from 'react-native-webview';
import {useAvatarCreatorUrl} from "../hooks/use-avatar-creator-url"
import {
    AssetUnlockedEvent,
    AvatarCreatorEvent,
    AvatarExportedEvent,
    UserAuthorizedEvent,
    UserSetEvent,
    UserUpdatedEvent,
    UserLoggedOutEvent
} from "../index"
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigators/AppNavigator';

const RPM_TARGET = 'readyplayerme';

// Replace with your custom subdomain
const subdomain = "dating-app";

interface RPMWebViewProps {
    handleAvatarExported: (avatarUrl: string) => void;
  }

export default function RPMWebView({ handleAvatarExported }: RPMWebViewProps) {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'AvatarCreator'>>();
    const webView = useRef<WebView | null>();
    const url = useAvatarCreatorUrl(subdomain, {});
    const supportedEvents = {
        'v1.avatar.exported': onAvatarExported,
        'v1.user.set': onUserSet,
        'v1.user.authorized': onUserAuthorized,
        'v1.asset.unlock': onAssetUnlocked,
        'v1.user.updated': onUserUpdated,
        'v1.user.logout': onUserLoggedOut,
    } as Record<string, any>;


    function onAvatarExported(message: AvatarExportedEvent) {
        Alert.alert(`Avatar Exported | Avatar Url = ${message.data?.url}`);
        handleAvatarExported(message.data?.url);
        navigation.navigate('AvatarViewer', { avatarUrl: message.data?.url });
      }

    function onAssetUnlocked(message: AssetUnlockedEvent) {
        Alert.alert(`Asset Unlocked | Asset ID = ${message.data?.assetId}`);
    }

    function onUserAuthorized(message: UserAuthorizedEvent) {
        Alert.alert(`User Authorized | User ID = ${message.data?.id}`);
    }

    function onUserSet(message: UserSetEvent) {
        Alert.alert(`User Set | User ID = ${message.data?.id}`);
    }

    function onUserUpdated(message: UserUpdatedEvent) {
        Alert.alert(`User Updated | User ID = ${message.data?.id}`);
    }

    function onUserLoggedOut(message: UserLoggedOutEvent) {
        Alert.alert(`User Logged Out`);
        console.log(message)
    }

    function onWebViewLoaded() {
        webView.current?.postMessage(
            JSON.stringify({
                target: "readyplayerme",
                type: "subscribe",
                eventName: "v1.**",
            })
        );
    }

    function onMessageReceived(message) {
        const data = message.nativeEvent.data;
        const event = JSON.parse(data) as AvatarCreatorEvent;

        if (event?.source !== RPM_TARGET) {
            return;
        }

        supportedEvents[event.eventName]?.(event);
    }

    return (
        <WebView
            ref={webView}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginTop: 30}}
            onLoad={onWebViewLoaded}
            onMessage={onMessageReceived}
            source={{uri: url}}
        />
    );
}