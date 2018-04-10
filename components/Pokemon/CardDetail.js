import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'

import CardField from './CardField'

export default class CardDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.item.artist}'s Card`
  })

  render() {
    var { popToTop, navigate } = this.props.navigation
    var { item } = this.props.navigation.state.params
    return (
      <ScrollView>
        <View>
          <Card
            titleStyle={{fontSize: 22}}
            image={{ uri: item.imageUrl }}
            imageStyle={{width: 350, height: 350}}>
            <CardField item={item} />
            <Button
              icon={{name: 'details'}}
              backgroundColor='#000'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Back To Home' 
              onPress={() => popToTop()} />
          </Card>
        </View>
      </ScrollView>
    )
  }
};
