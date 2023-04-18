import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalculadora} from '../components/BotonCalculadora';
import {useCalculadora} from '../Hooks/useCalculadora';

//se exportará a la App.tsx lo que salga del return de esta función
export const CalculadoraScreens = () => {
  //desestructuramos las funciones de useCalculadora
  const {
    numeroSuperior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    imprimirNum,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  //botones que aparecerán en pantalla y las acciones que se ejecutan (importadas de useCalculadora) ->
  //en los botones personalizados (importados de BotonCalculadora), cada View es una línea
  return (
    <View style={styles.calculadoraContainer}>
      {numeroSuperior !== '0' && (
        <Text style={styles.resultadoUp}>{numeroSuperior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalculadora
          texto="+/-"
          color="#9B9B9B"
          accion={positivoNegativo}
        />
        <BotonCalculadora texto="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalculadora texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="7" accion={imprimirNum} />
        <BotonCalculadora texto="8" accion={imprimirNum} />
        <BotonCalculadora texto="9" accion={imprimirNum} />
        <BotonCalculadora texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="4" accion={imprimirNum} />
        <BotonCalculadora texto="5" accion={imprimirNum} />
        <BotonCalculadora texto="6" accion={imprimirNum} />
        <BotonCalculadora texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="1" accion={imprimirNum} />
        <BotonCalculadora texto="2" accion={imprimirNum} />
        <BotonCalculadora texto="3" accion={imprimirNum} />
        <BotonCalculadora texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalculadora texto="0" ancho accion={imprimirNum} />
        <BotonCalculadora texto="." accion={imprimirNum} />
        <BotonCalculadora texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
