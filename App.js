import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import Pokemon from './views/Pokemon'
import PokemonDetail from './components/Pokemon/PokemonDetail'
import CardDetail from './components/Pokemon/CardDetail'

const RootStack = StackNavigator({
  Home: {
    screen: Pokemon
  },
  PokemonDetail: {
    screen: PokemonDetail
  },
  CardDetail: {
    screen: CardDetail
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'black'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}