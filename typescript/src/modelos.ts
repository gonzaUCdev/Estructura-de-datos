export interface ConversionRegistro {
  numeroDecimal: number;
  base: number;
  digitos: string[];
}

export class Conversion {
  constructor(private readonly numeroDecimal: number) {}

  convertir(base: number): ConversionRegistro {
    const simbolos = "0123456789ABCDEF";

    if (this.numeroDecimal === 0) {
      return { numeroDecimal: 0, base, digitos: ["0"] };
    }

    let numero = this.numeroDecimal;
    const residuos: string[] = [];

    while (numero > 0) {
      const residuo = numero % base;
      residuos.push(simbolos[residuo]);
      numero = Math.floor(numero / base);
    }

    residuos.reverse();
    return { numeroDecimal: this.numeroDecimal, base, digitos: residuos };
  }
}
