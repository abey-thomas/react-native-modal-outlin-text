import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text } from 'react-native';

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
    const labelOutStyle = {
      position: 'absolute',
      backgroundColor: 'white',
      left: 10,
      top: 8,
      fontSize: 14,
      color: '#7a7a7a',
      fontFamily: 'sans-serif',
    };
    const labelInStyle = {
      position: 'absolute',
      backgroundColor: null,
      left: 10,
      top: 22,
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
          {...props}
          style={{
            height: 56,
            fontSize: 18,
            color: '#141414',
            borderWidth: 1,
            borderColor: '#d0d0d0',
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
        <Text style={this.checkLabelPosition() ? labelOutStyle : labelInStyle}>
          {label}
        </Text>
      </View>
    );
  }
}
