/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { StyleSheet } from "react-native"
import { View, Text } from "@gluestack-ui/themed"
import { observer } from "mobx-react-lite"
import Swiper from 'react-native-deck-swiper'

// Import other required components or utilities

interface SwiperScreenProps {
    // Add any props if necessary, such as user avatars or actions on button press
}



export const SwiperScreen: FC<SwiperScreenProps> = observer(function SwiperScreen() {


    return (
        <View style={styles.container}>
         <Swiper
            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}/>
        </View>
  );
})
  

const styles = StyleSheet.create({

    card: {
    backgroundColor: "white",
    borderColor: "#E8E8E8",
    borderRadius: 4,
    borderWidth: 2,
    flex: 1,
    justifyContent: "center"
  },
  container: {
        backgroundColor: '#7B4FDB',
        flex: 1,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 20,
    textAlign: "center"
  }

});
