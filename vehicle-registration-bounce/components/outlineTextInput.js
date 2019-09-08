import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';

export default class OutlinedTextInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  checkLabelPosition = () => {
    return this.props.value || this.state.isFocused;
  };

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelOutViewStyle = {
      position: 'absolute',
      left: 10,
      top: 8,
      flex:1
    };
    const labelInViewStyle = {
      position: 'absolute',
      left: 10,
      top: 32,
      width:'100%'
    };
    const labelOutStyle = {
      backgroundColor: 'white',
      fontSize: 14,
      color: '#7a7a7a',
      fontFamily: 'sans-serif',
    };
    const labelInStyle = {
      position: 'absolute',
      backgroundColor: null,
      fontSize: 20,
      color: '#aaa',
    };
    return (
      <View
        style={{
          paddingTop: 18,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TextInput
          ref={'textinput'}
          {...props}
          style={{
            height: 56,
            fontSize: 18,
            color: '#141414',
            borderWidth: 1,
            borderColor: '#d0d0d0',
            borderRadius: 4,
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
        <TouchableOpacity
          style={
            this.checkLabelPosition() ? labelOutViewStyle : labelInViewStyle
          }
          onPress={() => this.refs.textinput.focus()}>
          <Text
            style={this.checkLabelPosition() ? labelOutStyle : labelInStyle}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
