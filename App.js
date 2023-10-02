import { FlatList, StyleSheet, Text, View } from 'react-native';
import DATA from "./DATA.js";
import {Row, Row2} from "./components/Row.js";

export default function App() {


  return (
    <View style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={({item}) => (
        <Row item={item} />
     )}
     
     
      >
        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
