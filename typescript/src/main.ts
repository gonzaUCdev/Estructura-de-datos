import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { convertirTodas, crearMatrizResultados } from "./conversor";

async function leerNumeroDecimal(): Promise<number> {
  const lector = createInterface({ input, output });

  while (true) {
    const entrada = await lector.question(
      "Ingresa un número entero en base 10: ",
    );
    const numero = Number(entrada);

    if (!Number.isInteger(numero)) {
      console.log("Debes ingresar un número entero.");
      continue;
    }

    if (numero < 0) {
      console.log("El número debe ser cero o positivo.");
      continue;
    }

    lector.close();
    return numero;
  }
}

function mostrarResultados(matriz: string[][]): void {
  console.log("\nConversión de bases");
  console.log("-".repeat(24));

  for (const [base, resultado] of matriz) {
    console.log(`Base ${base}: ${resultado}`);
  }
}

async function main(): Promise<void> {
  const numero = await leerNumeroDecimal();
  const conversiones = convertirTodas(numero);
  const matrizResultados = crearMatrizResultados(conversiones);
  mostrarResultados(matrizResultados);
}

void main();
