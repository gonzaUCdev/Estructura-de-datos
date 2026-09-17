import { Conversion, ConversionRegistro } from "./modelos";

const BASES = [2, 8, 16];

export function convertirTodas(numeroDecimal: number): ConversionRegistro[] {
  const conversion = new Conversion(numeroDecimal);
  return BASES.map((base) => conversion.convertir(base));
}

export function crearMatrizResultados(
  conversiones: ConversionRegistro[],
): string[][] {
  return conversiones.map((conversion) => [
    conversion.base.toString(),
    conversion.digitos.join(""),
  ]);
}
