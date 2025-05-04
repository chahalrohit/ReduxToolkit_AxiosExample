import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  name: string;
  extStyles?: object;
}

const Button: React.FC<Props> = ({name = '', extStyles}) => {
  return (
    <TouchableOpacity style={[styles.button, extStyles]}>
      <Text style={{color: '#000', fontSize: scale(12)}}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: scale(10),
    paddingVertical: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    backgroundColor: 'skyblue',
  },
});
