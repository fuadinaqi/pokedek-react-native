import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
  StyleSheet, 
  Text, 
  ScrollView, 
  View, 
  FlatList,
  TouchableHighlight
} from 'react-native';
import { 
  List, 
  ListItem 
} from 'react-native-elements'
import pokemon from '../pokemon.json'

import {
  fetchPokedex
} from '../store/actions'

class Pokemon extends Component {
  static navigationOptions = {
    title: 'Welcome to Pokedek'
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => {
    var { navigate } = this.props.navigation
    return (
      <ListItem
      key={item.id}
      title={item.name}
      avatar={{uri: 'https://d34rompce3lx70.cloudfront.net/wp-content/uploads/sites/44/2018/02/Pokemon-blog-post-290-X-300.png?v='}}
      onPress={() => navigate('PokemonDetail', {item})}
      />
    )
  }

  componentDidMount () {
    this.props.fetchPokedex()
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.pokedex}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCEDC8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#9CCC55',
    padding: 25,
    margin: 7,
    borderRadius: 50
  },
  item: {
    color: 'white',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  pokedex: state.pokedex
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokedex
}, dispatch)

const connectedPokemon = connect(mapStateToProps, mapDispatchToProps)(Pokemon)

export default connectedPokemon