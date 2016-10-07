import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return {
      task: '',
      tasks: ['task1','task2','task3']
    }
  },
  addTask() {
    let tasks = this.state.tasks.concat([this.state.task]);
    this.setState({tasks});
  },
  completeTask(index) {
    console.log('completeTask: ', index);
    let tasks = this.state.tasks;
    tasks = tasks.slice(0,index).concat(tasks.slice(index+1));
    this.setState({tasks});
  },
  renderList(tasks){
    return tasks.map( (task, index) => {
      return (
        <View key={task} style={styles.task}>
          <Text>
            {task}
          </Text>
          <TouchableOpacity onPress={()=>this.completeTask(index)}>
            <Text>
              &#10003;
            </Text>
          </TouchableOpacity>
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
        <TextInput
          style={styles.input}
          placeholder='Add a task...'
          onChangeText={(text)=>{
            this.setState({task: text});
          }}
          onEndEditing={()=>{this.addTask()}}
        />
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
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    textAlign: 'center',
    margin: 10
  },
  task: {
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
