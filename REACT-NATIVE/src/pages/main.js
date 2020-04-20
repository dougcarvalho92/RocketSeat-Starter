import React, { Component } from 'react';

import { View, Text, FlatList , TouchableOpacity} from 'react-native';
import api from '../services/api'
// import { Container } from './styles';s

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  };

  state = {
    productInfo:{},
    docs: [],
    page:1
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => { //PRECISA SER ASSIM POR CONTA  DO THIS QUE NÃO DA PARA REFERENCIAR COMO CLASSE NORMAL
    const response = await api.get(`/products?page=${page}`);
    const { docs , ...productInfo} = response.data;
    this.setState({ docs:[...this.state.docs, ...docs] , productInfo, page})
  }
  loadMore = () => {
    const {page, productInfo } = this.state;

    if(page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }
  renderItem = ({ item }) => (
    <View style={ styles.productContainer }>
      <Text style={ styles.productTitle }>{ item.title }</Text>
      <Text style={ styles.productDescription } numberOfLines={2} ellipsizeMode='tail'>{ item.description }</Text>
      <TouchableOpacity onPress={() => { 
        console.log(this.props);
        this.props.navigation.navigate("Product", {product: item});
      }} style={ styles.productButton }>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <View style={ styles.container }>
        <FlatList data={ this.state.docs } keyExtractor={ item => item._id } renderItem={ this.renderItem } onEndReached={this.loadMore} onEndReachedThreshold={0.1}/>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  productContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    boderColor: '#ddd',
    borderRadius: 5,
    padding: 20,
    margin: 20
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  list: {
    padding: 20
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  }
}
