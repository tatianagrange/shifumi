import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title, Paragraph, Colors } from "react-native-paper";

import ShifumiElement from "./ShifumiElement";

import {Context as ScoreContext} from "../context/ScoreContext"

const elementsWithRules = [
  {
    name: "Pierre",
    id: 0,
    winOn: 2,
    looseOn: 1,
  },
  {
    name: "Feuille",
    id: 1,
    winOn: 0,
    looseOn: 2,
  },
  {
    name: "Ciseaux",
    id: 2,
    winOn: 1,
    looseOn: 0,
  },
];

const Game = () => {
  const [userSelection, setUserSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");
  const [result, setResult] = useState("");

  const { addScore  } = useContext(ScoreContext);

  const getRandomKey = () => {
    return Math.floor(Math.random() * (elementsWithRules.length));
  }

  const makeBattle = () => {
    console.log(userSelection)
    console.log(computerSelection)
    if(userSelection.looseOn === computerSelection.id){
      setResult("Perdu")
    }else if (userSelection.winOn === computerSelection.id){
      setResult("Gagné")
    }else{
      setResult("Essaye encore")
    }

    addScore({result: result});
  }

  const elementPressed = (id) => {
    const userElement = elementsWithRules.find(element => element.id === id);
    setUserSelection(userElement);
    setComputerSelection(elementsWithRules[getRandomKey()]);
    makeBattle();
  };

  let elements = [];
  for (let element = 0; element < elementsWithRules.length; element++) {
    elements.push(
      <ShifumiElement
        name={elementsWithRules[element].name}
        onPress={() => elementPressed(elementsWithRules[element].id)}
      ></ShifumiElement>
    );
  }

  console.log(result)
  return (
    <View>
      {elements}
      <Title style={styles.text}>Joueur :</Title>
      <Paragraph  style={styles.text}>{userSelection.name}</Paragraph>
      <Title  style={styles.text}>Ordi :</Title>
      <Paragraph  style={styles.text}>{computerSelection.name}</Paragraph>
      <Title  style={styles.text}>{result}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.grey200
  }
});

export default Game;
