import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import "@expo/vector-icons";
import Opacity from "./Animations/Opacity"; // 6.3.1


const styles = StyleSheet.create({});

const list = [
  {
    title: 'Opacity',
    link: 'Opacity',

  },
  {
    title: 'Translate',
    link: 'Translate',
  },
  {
    title: 'Scale',
    link: 'Scale',
  },
];

export default class Main extends React.Component {

  renderItem = ({ item }) => (
    <ListItem

      title={item.title}
      chevron
      bottomDivier
      containerStyle={{ borderBottomColor: "#eee", borderBottomWidth: 1 }}
      wrapperStyle={{ borderBottomWidth: 0, paddingVertical: 10}}
      onPress={() => this.props.navigation.navigate(item.link)}
    />
  );

  render() {
    return (
      <View style={{ paddingTop: 20, backgroundColor: '#fff', flex: 1 }}>
        <Text style={{ fontSize: 32 }}>Animations!</Text>
        <List
          containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
        >
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={this.renderItem}
          />
        </List>
      </View>
    );
  }
}
