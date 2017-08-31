import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = style;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput 
        value={props.value}
        onChangeText={props.onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const style = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { Input };
