import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import params from './src/params'

export default class App extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mines!
        </Text>
        <Text style={styles.welcome}>
        Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
