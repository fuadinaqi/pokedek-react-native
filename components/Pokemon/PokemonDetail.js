import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Image } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchDetail, fetchLoading } from '../../store/actions'

class PokemonDetail extends Component {
  constructor () {
    super()
    this.state = {
      isRefresh: false
    }
  }
  componentWillMount () {
    this.getData()
  }

  getData = () => {
    this.setState({
      isRefresh: false
    })
    this.props.fetchLoading()
    const { item } = this.props.navigation.state.params
    // console.log(this.props, 'ini pros')
    this.props.fetchDetail(item)
  }

  setRefresh = () => {
    this.setState({
      isRefresh: true
    })
    this.getData()
  }

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.item.name} Cards`
  })

  _keyExtractor = (item, index) => item.id

  render() {
    var { navigate } = this.props.navigation
    if (this.props.loading) {
      return <Image source={{uri: this.props.loadingImage}} style={{width: 350, height: 350}} />
    }
    if (this.props.pokemonCards.length < 1) {
      return <Text>woi blm msk</Text>
    } else {
      return (
        <View>
          <FlatList
          data={this.props.pokemonCards}
          keyExtractor={this._keyExtractor}
          horizontal={false}
          numColumns={2}
          refreshing={this.state.isRefresh}
          onRefresh={() => this.setRefresh()}
          renderItem={({item}) => <View>
            <Card
              title={item.artist}
              image={{ uri: item.imageUrl }}
              imageStyle={{width: 150, height: 150, margin: 0}}>
              <Button
                icon={{name: 'details'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'black', width: 100}}
                title='DETAIL'
                onPress={() => navigate('CardDetail', {item})} />
            </Card>
          </View>}
          />
        </View>
      )
    }
  }
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350
  }
})

const mapStateToProps = state => ({
  pokemonCards: state.pokemonCards.lists,
  loading: state.pokemonCards.loading,
  error: state.pokemonCards.error,
  loadingImage: state.loadingImage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDetail,
  fetchLoading
}, dispatch)

const connectedPokemonDetail = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)

export default connectedPokemonDetail