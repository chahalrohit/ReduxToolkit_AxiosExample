import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './PutExample.styles';

interface ITEM {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const PutExample: React.FC = () => {
  const [data, setData] = useState<ITEM[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .get('https://gorest.co.in/public/v2/users')
      .then(response => {
        setData(response?.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(function () {});
  }

  const renderItem = ({item, index}: {item: ITEM; index: number}) => {
    return (
      <View style={styles.renderItem}>
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
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `7870702${index?.toString()}`}
      />
    </SafeAreaView>
  );
};
export default PutExample;
