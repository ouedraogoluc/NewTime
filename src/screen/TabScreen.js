import React, { Component } from 'react';
import { Container,Header, Left, Body, Right, Title , Button, Icon, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/TopStorie';
import Tab2 from './tabs/MostPopullar';
import Tab3 from './tabs/Bussiness';
import { Feather } from '@expo/vector-icons'; 

export default class TabScreen extends Component {
  render() {
    return (
      <Container>
              <Header>
          <Left>
            <Button transparent>
             <Icon name='ios-menu' />
             </Button>
          </Left>
          <Body>
            <Title>My new</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
            <Feather name="more-horizontal" size={24} color="#fff" />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="Top Storie">
            <Tab1 />
          </Tab>
          <Tab heading="Most Popullar">
            <Tab2 />
          </Tab>
          <Tab heading="Business">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}