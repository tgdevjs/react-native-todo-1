import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
