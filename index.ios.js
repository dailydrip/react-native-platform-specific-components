import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414A8C',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class platformSpecificComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'tab1' };
  }
  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue"
      >
        <TabBarIOS.Item
          title="Tab 1"
          onPress={() => {
            this.setState({
              selectedTab: 'tab1',
            }); }}
          selected={this.state.selectedTab === 'tab1'}
        >
          <View style={styles.container1}>
            <Text>Tab 1</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          onPress={() => {
            this.setState({
              selectedTab: 'tab2',
            }); }}
          selected={this.state.selectedTab === 'tab2'}
          renderAsOriginal
          title="Tab 2"
        >
          <View style={styles.container2}>
            <Text>Tab 2</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('platformSpecificComponents', () => platformSpecificComponents);
