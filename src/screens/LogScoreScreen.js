import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Colors } from "react-native-paper";

import { Context as ScoreContext } from "../context/ScoreContext";
import ItemLogScore from "../components/ItemLogScore";

const LogScoreScreen = () => {
  const {
    state: { scores },
  } = useContext(ScoreContext);

  const renderItem = ({ item }) => (
    <ItemLogScore score={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={scores}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey900
  }
});

export default LogScoreScreen;
