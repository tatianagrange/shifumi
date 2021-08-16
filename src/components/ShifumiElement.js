import * as React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ShifumiElement = ({name, onPress}) => (
  <Button style={styles.element} mode="contained" onPress={onPress}>
    {name}
  </Button>
);

const styles = StyleSheet.create({
  element: {
    margin: 10
  },
});

export default ShifumiElement;
