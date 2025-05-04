import React, {useState} from 'react';
import {Switch, Text, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './PostExample.styles';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const genderType = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

const GetExample: React.FC = () => {
  const [id, setId] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const onChangeText = (value: number | string | null, type: string) => {
    switch (type) {
      case 'id':
        setId(value !== null ? Number(value) : undefined);
        break;
      case 'name':
        setName(value !== null ? String(value) : '');
        break;
      case 'email':
        setEmail(value !== null ? String(value) : '');
        break;
      case 'gender':
        setGender(value !== null ? String(value) : '');
        break;
      case 'status':
        setStatus(value !== null ? Boolean(value) : false);
        break;
      default:
        break;
    }
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Post" />
      <TextInput
        style={{
          marginHorizontal: scale(10),
          borderWidth: 1,
          paddingLeft: scale(10),
          paddingVertical: verticalScale(10),
          borderRadius: moderateScale(5),
          marginTop: verticalScale(10),
        }}
        value={id !== undefined ? String(id) : undefined}
        onChangeText={value => onChangeText(value, 'id')}
        placeholder="Id"
      />
      <TextInput
        style={{
          marginHorizontal: scale(10),
          borderWidth: 1,
          paddingLeft: scale(10),
          paddingVertical: verticalScale(10),
          borderRadius: moderateScale(5),
          marginTop: verticalScale(10),
        }}
        value={name}
        onChangeText={value => onChangeText(value, 'id')}
        placeholder="Name"
      />
      <TextInput
        style={{
          marginHorizontal: scale(10),
          borderWidth: 1,
          paddingLeft: scale(10),
          paddingVertical: verticalScale(10),
          borderRadius: moderateScale(5),
          marginTop: verticalScale(10),
        }}
        value={email}
        onChangeText={value => onChangeText(value, 'id')}
        placeholder="Email"
      />
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={genderType}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: scale(10),
          marginTop: verticalScale(20),
          justifyContent: 'space-between',
        }}>
        <Text>{isEnabled ? 'Active' : 'Inactive'}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Button name="Submit" extStyles={{marginTop: scale(25)}} />
    </SafeAreaView>
  );
};
export default GetExample;
