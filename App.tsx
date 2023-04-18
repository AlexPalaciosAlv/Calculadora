import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {CalculadoraScreens} from './src/screens/CalculadoraScreens';
import {styles} from './src/theme/appTheme';

export const App = () => {

  //safeAreaView para margen de area en la app //statusbar para la zona donde sale el resultado
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <CalculadoraScreens />
    </SafeAreaView>
  );
};
