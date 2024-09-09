import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Header } from './src/shared/components';

function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView style={app.scrollable} contentInsetAdjustmentBehavior="automatic">
        <Header style={app.header}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const app = StyleSheet.create({
  scrollable: {
    padding: 16,
  },

  header: {

  }
});

export default App;
