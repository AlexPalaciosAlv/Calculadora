import {useState, useRef} from 'react';
enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

//acciones que se ejecutan en cada botón
export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroSuperior, setNumeroSuperior] = useState('100');

  //para multiplicar, dividir, sumar, restar
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroSuperior('0');
  };

  const btnDelete = () => {
    if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroSuperior(numero.slice(0, -1));
    } else {
      setNumeroSuperior(numero);
    }
    setNumero('0');
  };

  const imprimirNum = (numeroTexto: string) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        //evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } //evitar 00000.0
      else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else setNumero(numero + numeroTexto);
    } else setNumero(numero + numeroTexto);
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  //casos que se activan según el botón
  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroSuperior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setNumeroSuperior('0');
  };
  return {
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
  };
};
