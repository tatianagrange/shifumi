import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Paragraph, Colors } from "react-native-paper";

import Game from "../components/Game";


const GameScreen = () => {
  

  return (
    <View style={styles.container}>
      <Title style={styles.text}>Shi Fu Mi</Title>
      <Paragraph style={styles.text}>Choisi ton arme !</Paragraph>
      <Game></Game>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey900
  },
  text: {
    color: Colors.grey200
  }
});

export default GameScreen;
