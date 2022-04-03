import React, {useState, useEffect} from 'react'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {View, Button} from 'react-native';
import { FlipInEasyY } from 'react-native-reanimated'; 
export const Prueba = () => {
  // const randomWidth = useSharedValue(10);

  // const config = {
  //   duration: 5000,
  //   easing: Easing.bezier(0.5, 0.01, 0, 1),
  // };

  // const style = useAnimatedStyle(() => {
  //   return {
  //     width: withTiming(randomWidth.value, config),
  //   };
  // });

  return (
      <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      {/* <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'black', margin: 30},
          style,
        ]}
      ></Animated.View> */}
      <Animated.View entering={FlipInEasyY}>
        <View style={{width:'50%', height:'50%', backgroundColor: 'red'}}>

      </View>
      </Animated.View >
      
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  )
}
