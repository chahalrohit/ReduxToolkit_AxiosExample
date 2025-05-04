import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title = ''}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.view1]}>
        <Icon name="menu-open" size={scale(20)} />
      </View>
      <View style={[styles.view2]}>
        <Text style={[styles.headerText]}>{title}</Text>
      </View>
      <View style={[styles.view3]}></View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: scale(5),
    elevation: 5,
    backgroundColor: 'transparent',
    borderBottomWidth: scale(0.5),
  },
  view1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: scale(15),
    color: '#000',
  },
  view3: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
