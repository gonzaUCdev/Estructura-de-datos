from dataclasses import dataclass


@dataclass
class ConversionRegistro:
    """Datos obtenidos al convertir un número a una base."""

    numero_decimal: int
    base: int
    digitos: list[str]

    def resultado(self) -> str:
        return "".join(self.digitos)


class Conversion:
    """Representa las conversiones de un número decimal."""

    def __init__(self, numero_decimal: int) -> None:
        self.numero_decimal = numero_decimal

    def convertir(self, base: int) -> ConversionRegistro:
        simbolos = "0123456789ABCDEF"

        if self.numero_decimal == 0:
            return ConversionRegistro(0, base, ["0"])

        numero = self.numero_decimal
        residuos: list[str] = []

        while numero > 0:
            residuo = numero % base
            residuos.append(simbolos[residuo])
            numero //= base

        residuos.reverse()
        return ConversionRegistro(self.numero_decimal, base, residuos)
