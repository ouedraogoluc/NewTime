import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';

import TimeAgo from './Time'
 export class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
        return(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'data:https://www.google.com/url?sa=i&url=https%3A%2F%2Fsn.linkedin.com%2Fin%2Fluc-ouedraogo-0ba530177&psig=AOvVaw1jOMEfN2RoCjI4RbqWry05&ust=1622497696563000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCBj_628vACFQAAAAAdAAAAABAD=' }} />
              </Left>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                    <TimeAgo  time={this.data.publishedAt}/>
                    
                </View>
              </Body>
              <Right>
                <Button transparent onPress={this.handlePress}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
    }
}

export default DataItem;