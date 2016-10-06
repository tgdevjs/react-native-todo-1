import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return {
      tasks: ['task1','task2','task3']
    }
  },
  renderList(tasks){
    return tasks.map( (task) => {
      return (
        <View key={task} style={styles.task}>
          <Text>
            {task}
          </Text>
        </View>
      );
    })
  },
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.header}>
          Main
        </Text>
        {this.renderList(this.state.tasks)}
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    margin: 30,
    marginTop: 40,
    fontSize: 18,
    textAlign: 'center',
  },
  task: {
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
