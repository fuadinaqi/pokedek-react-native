import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Badge, List, ListItem } from 'react-native-elements'

export default class CardField extends Component {
  render() {
    const item = this.props.item
    return (
      <View>
        {
          item.types.map((type, i) => 
          <View key={i} style={styles.types}>
            <Text style={{color: 'white'}}>{type}</Text>
          </View>
          )
        }
        <List>
          <ListItem 
            leftIcon={{name: 'user', type: 'entypo', color: 'green'}}
            title={item.name}
            titleStyle={{fontSize: 17, color: 'grey'}}
            rightIcon={{color: 'white' }} >
          </ListItem>
          <ListItem
            leftIcon={{name: 'heart', type: 'entypo', color: 'red'}}
            title={item.hp}
            titleStyle={{fontSize: 17, color: 'grey'}}
            rightIcon={{color: 'white' }} >
        </ListItem>
        </List>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  types: {
    height: 20,
    width: 100,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});