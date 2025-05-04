import axios from 'axios';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/MaterialIcons';
import styles from './DeleteExample.styles';
import Header from '../../components/common/Header';

interface ITEM {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const DeleteExample: React.FC = () => {
  const [data, setData] = useState<ITEM[]>([]);

  const onDelete = (id: number) => {
    console.log('value : ', JSON.stringify(id));
    axios
      .get(`/public/v2/users/${id}`)
      .then(response => {
        setData(response?.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(function () {});
  };

  const renderItem = ({item, index}: {item: ITEM; index: number}) => {
    return (
      <View style={styles.renderItem}>
        <View>
          <View style={styles.view1}>
            <Text style={{color: '#000'}}>Id : </Text>
            <Text style={{color: '#000'}}>{item?.id}</Text>
          </View>
          <View style={styles.view1}>
            <Text style={{color: '#000'}}>Name : </Text>
            <Text style={{color: '#000'}}>{item?.name}</Text>
          </View>
          <View style={styles.view1}>
            <Text style={{color: '#000'}}>Email : </Text>
            <Text style={{color: '#000'}}>{item?.email}</Text>
          </View>
          <View style={styles.view1}>
            <Text style={{color: '#000'}}>Gender : </Text>
            <Text style={{color: '#000'}}>{item?.gender}</Text>
          </View>
          <View style={styles.view1}>
            <Text style={{color: '#000'}}>Status : </Text>
            <Text style={{color: '#000'}}>{item?.status}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => onDelete(item?.id)}>
          <Icons
            name="delete"
            color={'#000'}
            size={scale(20)}
            style={{alignSelf: 'flex-start'}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Delete" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `7870702${index?.toString()}`}
      />
    </SafeAreaView>
  );
};
export default DeleteExample;
