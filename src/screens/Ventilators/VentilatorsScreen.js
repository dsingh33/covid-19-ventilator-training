import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { ventilators } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default class VentilatorsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ventilators'
  };

  constructor(props) {
    super(props);
  }

  onPressVentilator = item => {
    const title = item.name;
    const ventilator = item;
    this.props.navigation.navigate('RecipesList', { ventilator, title });
  };

  renderVentilator = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressVentilator(item)}>
      <View style={styles.ventilatorsItemContainer}>
        <Image style={styles.ventilatorsPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.ventilatorsName}>{item.name}</Text>
        <Text style={styles.ventilatorsInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={ventilators}
          renderItem={this.renderVentilator}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
