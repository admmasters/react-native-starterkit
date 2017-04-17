// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Entry extends Component<void, void, void> {
  render() {
    return <View style={styles.container}><Text>Starter Kit</Text></View>;
  }
}
