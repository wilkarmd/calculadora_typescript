let display: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
let expresion: string = '';

function calcular(): void {
  try {
    const resultado = eval(expresion);
    display.value = resultado.toString();
    expresion = resultado.toString();
  } catch (error) {
    display.value = 'Error';
    expresion = '';
  }
}

function usarOperador(operador: string): void {
  if (expresion !== '' && !isNaN(Number(expresion[expresion.length - 1]))) {
    expresion += operador;
    display.value = expresion;
  }
}

function agregarNumero(num: string): void {
  expresion += num;
  display.value = expresion;
}

function borrarCampo(): void {
  expresion = '';
  display.value = '';
}


