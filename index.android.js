import React from 'react';
import {
  AppRegistry,
  Text,
  ViewPagerAndroid,
  View,
} from 'react-native';


const styles = {
  container: {
    flex: 1,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
};


const platformSpecificComponents = () => (
  <ViewPagerAndroid
    style={{ flex: 1 }}
    initialPage={0}
  >
    <View style={styles.pageStyle}>
      <Text>First page</Text>
    </View>
    <View style={styles.pageStyle}>
      <Text>Second page</Text>
    </View>
  </ViewPagerAndroid>
);


AppRegistry.registerComponent('platformSpecificComponents', () => platformSpecificComponents);
