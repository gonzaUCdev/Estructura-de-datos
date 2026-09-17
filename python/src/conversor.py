from modelos import Conversion, ConversionRegistro


BASES = [2, 8, 16]


def convertir_todas(numero_decimal: int) -> list[ConversionRegistro]:
    conversion = Conversion(numero_decimal)
    return [conversion.convertir(base) for base in BASES]


def crear_matriz_resultados(
    conversiones: list[ConversionRegistro],
) -> list[list[str]]:
    return [
        [str(conversion.base), conversion.resultado()]
        for conversion in conversiones
    ]
