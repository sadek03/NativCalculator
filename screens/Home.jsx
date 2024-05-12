import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput, FlatList} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/gloval';

// const buttons = [
//   {value: 'AC', bgColor: '#633f20'},
//   {value: '()', bgColor: '#5a3f4a'},
//   {value: '%', bgColor: '#5a3f4a'},
//   {value: '/', bgColor: '#5a3f4a'},
//   {value: '7', bgColor: '#27181d'},
//   {value: '8', bgColor: '#27181d'},
//   {value: '9', bgColor: '#27181d'},
//   {value: 'X', bgColor: '#5a3f4a'},
//   {value: '4', bgColor: '#27181d'},
//   {value: '5', bgColor: '#27181d'},
//   {value: '6', bgColor: '#27181d'},
//   {value: '-', bgColor: '#5a3f4a'},
//   {value: '1', bgColor: '#27181d'},
//   {value: '2', bgColor: '#27181d'},
//   {value: '3', bgColor: '#27181d'},
//   {value: '+', bgColor: '#5a3f4a'},
//   {value: '0', bgColor: '#27181d'},
//   {value: '.', bgColor: '#27181d'},
//   {value: 'B', bgColor: '#27181d'},
//   {value: '=', bgColor: '#8d004f'},
// ];

const buttons = [
  {
    value: 'AC',
    bgColor: '#633f20',
  },
  {
    value: '()',
    bgColor: '#5a3f4a',
  },
  {
    value: '%',
    bgColor: '#5a3f4a',
  },
  {
    value: '/',
    bgColor: '#5a3f4a',
  },
  {
    value: '7',
    bgColor: '#27181d',
  },
  {
    value: '8',
    bgColor: '#27181d',
  },
  {
    value: '9',
    bgColor: '#27181d',
  },
  {
    value: 'X',
    bgColor: '#5a3f4a',
  },
  {
    value: '4',
    bgColor: '#27181d',
  },
  {
    value: '5',
    bgColor: '#27181d',
  },
  {
    value: '6',
    bgColor: '#27181d',
  },
  {
    value: '-',
    bgColor: '#5a3f4a',
  },
  {
    value: '1',
    bgColor: '#27181d',
  },
  {
    value: '2',
    bgColor: '#27181d',
  },
  {
    value: '3',
    bgColor: '#27181d',
  },
  {
    value: '+',
    bgColor: '#5a3f4a',
  },
  {
    value: '0',
    bgColor: '#27181d',
  },
  {
    value: '.',
    bgColor: '#27181d',
  },
  {
    value: 'B',
    bgColor: '#27181d',
  },
  {
    value: '=',
    bgColor: '#8d004f',
  },
];

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = value => {
    if (value == '=') {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } else if (value === 'AC') {
      setInputValue('');
    } else if (value === 'X') {
      setInputValue(prevValue => prevValue + '*');
    } else if (value === 'B') {
      setInputValue(prevValue => prevValue.slice(0, -1));
    } else if (value === '%') {
      const result = eval(inputValue) / 100;
      setInputValue(result.toString());
    } else {
      setInputValue(prevValue => prevValue + value);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#1a1114'}}>
      <StatusBar backgroundColor={'#3b252a'} />
      <View style={styles.display}>
        <Icon
          name="dots-vertical"
          style={{marginLeft: 'auto'}}
          size={25}
          color="#eacad2"
        />
        <TextInput
          editable={false}
          value={inputValue}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.keyboard}>
        <FlatList
          data={buttons}
          numColumns={4}
          columnWrapperStyle={{gap: 10, marginBottom: 10}}
          renderItem={({item}) => {
            let element = null;
            if (item.value === '+') {
              element = (
                <Icon
                  name="plus"
                  style={{margin: 'auto'}}
                  size={55}
                  color="#eacad2"
                />
              );
            } else if (item.value === '()') {
              element = (
                <Icon
                  name="code-parentheses"
                  style={{margin: 'auto'}}
                  size={55}
                  color="#eacad2"
                />
              );
            } else if (item.value === '=') {
              element = (
                <Icon
                  name="equal"
                  style={{margin: 'auto'}}
                  size={55}
                  color="#eacad2"
                />
              );
            } else if (item.value === '-') {
              element = (
                <Icon
                  name="minus"
                  style={{margin: 'auto'}}
                  size={55}
                  color="#eacad2"
                />
              );
            } else if (item.value === 'X') {
              element = (
                <Icon
                  name="window-close"
                  style={{margin: 'auto'}}
                  size={55}
                  color="#eacad2"
                />
              );
            } else if (item.value === 'B') {
              element = (
                <Icon
                  name="backspace"
                  style={{margin: 'auto', marginLeft: 20}}
                  size={30}
                  color="#eacad2"
                />
              );
            } else {
              element = <Text style={styles.keyboardText}>{item.value}</Text>;
            }
            return (
              <TouchableOpacity onPress={() => handleButtonPress(item.value)}>
                <View style={[styles.button, {backgroundColor: item.bgColor}]}>
                  <TouchableRipple style={styles.ripple}>
                    {element}
                  </TouchableRipple>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.value}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingHorizontal: 5,
            gap: 10,
          }}>
          <Text style={{textAlign: 'left'}}>Developed By: Sadek</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon
                name="cog"
                style={{margin: 'auto', marginLeft: 20}}
                size={30}
                color="#eacad2"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="history"
                style={{margin: 'auto', marginLeft: 20}}
                size={30}
                color="#eacad2"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
