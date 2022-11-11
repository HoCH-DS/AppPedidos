import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import ProductsView from './app/ui/views/ProductView/ProductView';


const App = () => {

  return (
    <>

    <ProductsView></ProductsView>

    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
