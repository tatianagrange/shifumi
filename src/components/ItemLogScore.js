import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "react-native-paper";

const ItemLogScore = ({score}) => (
  <View>
    <Text style={styles.text}>{score.result}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: Colors.grey200
  }
});

export default ItemLogScore;
