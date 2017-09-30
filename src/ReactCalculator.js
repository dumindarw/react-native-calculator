import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
  [1,2,3,'/'],
  [4,5,6,'x'],
  [7,8,9,'-'],
  [0,'.','=','+']
];

export default class ReactCalculator extends Component {

  render (){
    return(
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}></View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  _renderInputButtons(){
    let views = [];

    for (var i = 0; i < inputButtons.length; i++) {
      let row = inputButtons[i];
      let inputRow = [];

      for (var j = 0; j < row.length; j++) {
        let input = row[j];
        inputRow.push(
          <InputButton value={input} key={i + '-' + j}/>
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + i}>{inputRow}</View>);
    }

    return views;
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator)
