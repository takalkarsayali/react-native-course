import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
const App = () => {
  const uri = DiceFive;
  return (
    <>
      <View>
        <Image source={uri} />
        <TouchableOpacity>
          <Text>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
